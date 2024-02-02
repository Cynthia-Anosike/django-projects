"""A collections of views and collection"""
from api import api, db
from api.models import User
import json, random
from flask import request, jsonify
from flask_jwt_extended import create_access_token, get_jwt_identity,\
    jwt_required, current_user, get_jwt
import re
from flask_jwt_extended import JWTManager
from pymongo import MongoClient
from bson import ObjectId


client = MongoClient()
db1 = client["suggestion"]
jwt = JWTManager(api)
email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'

"""
@api.after_request
def refresh_expiring_jwts(response):
    try:
        exp_timestamp = get_jwt()["exp"]
        now = datetime.now(timezone.utc)
        target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
        if target_timestamp > exp_timestamp:
            access_token = create_access_token(identity=get_jwt_identity)
            set_access_cookies(response, access_token)
        return response
    except (RuntimeError, KeyError):
        return response
        """

#Register a callback function that takes whatever object is passed in as the identity when creating JWTs and converts
#it to a JSON serializable format.
@jwt.user_identity_loader
def user_identity_loader(user):
    return user.id

#Register a callback function that loads a user from your database whenenever a protected route is accessed.
@jwt.user_lookup_loader
def user_lookup_loader(_jwt_header, jwt_data):
    identity = jwt_data["sub"]
    return User.query.filter_by(id=identity).one_or_none()

@api.route('/api/login', methods=["POST"])
def login():
    data = request.json
    if 'email' not in data or 'password' not in data:
        return jsonify({'message': 'Email and password are required'}), 400

    email, password = data.get("email", None), data.get("password", None)
    user = User.query.filter_by(email=email).one_or_none()

    if not user or not user.check_password(password):
        return jsonify({"message": 'Incorrect password or email'}, 401)

    #response = jsonify({"message": 'Successfully logged in', 'user_id': user.id})
    access_token = create_access_token(identity=user)
    #use = user.id
    #set_access_cookies(response, access_token, domain="localhost")
    return jsonify(access_token=access_token)

"""
@api.route('/api/logout', methods=["POST"])
def logout():
    response = jsonify({'message': 'Successfully logged out'})
    unset_jwt_cookies(response)
    return response

@api.route('/get-csrf-token', methods=['GET'])
def get_csrf_token():
    csrf_token = generate_csrf()
    return csrf_token
"""

@api.route('/api/signup', methods=['POST'])
def signup():
    data = request.json
    if 'email' not in data or 'password' not in data:
        return jsonify({"message": 'email and password are required'}), 400
    
    email, password = data.get('email'), data.get('password')
    if not re.match(email_pattern, email):
        return jsonify({"message":'Invalid email format'}), 400
    
    user = User.query.filter_by(email=email).first()
    if not user:
        user = User(email = email)
        user.set_password(password)
        db.session.add(user)
        db.session.commit()
        
        return jsonify(message='Successfully created'), 200
    else:
        return jsonify({'message': 'User already exists, please log in'}), 202
    
@api.route('/api/profile', methods=["GET", "POST"])
@jwt_required(locations=["headers"])
def profile():
    data = request.json
    
    if 'email' not in data or 'name' not in data or 'location' not in data:
        return jsonify({'message': 'email and password are required'}), 400
    name, email, location = data.get('name'), data.get('email'), data.get('location')
    if not re.match(email_pattern, email):
        return jsonify({'message': 'Invalid email format'}), 400
    user = User.query.filter_by(email=email).first()
    if user:
        user.name = name
        user.email = email
        user.location = location
        db.session.commit()
        return jsonify({"message": "Profile updated successfully"})
    else:
        return jsonify({"message": "User not found"})

@api.route('/api/user', methods=["GET"])
@jwt_required(locations=["headers"])
def user():
    if not current_user:
        return jsonify({"message": "user is not logged in"})
    user = User.query.filter_by(id=current_user.id).first()
    if user:
        i = user.email.find('@')
        email = user.email[:i]
        return jsonify({"name": user.name, "email": user.email, "location": user.location, "email2": email})
    else:
        return jsonify({"message": "User not found"})
    

#API to fetch movie by ig
@api.route("/api/movies/<string:movie_id>", methods=["GET"])
def get_movie_by_id(movie_id):
    movie = movies.get(str(movie_id))
    if movie is not None:
        return jsonify(movie)
    else:
        return jsonify({"error": "Movie not found"}, 404)


#API to fetch movies database with genre_name
@api.route('/api/movies/query', methods=["GET"])
# @jwt_required()
def movies():
    # if not current_user:
        # return jsonify({"message": "Login required"})
    data = request.args
    genre_name = data.get('genre_name', None)
    movies = []
    response = list(db1.movies_collection.find( {'genre_ids': genre_name}))
    if response:
        movies_fetched = response
        for movie in movies_fetched:
            movie["_id"] = str(movie["_id"])
            movies.append(movie)
    else:
        return jsonify({"Message": "Failed to fetched movie genre"})
    random.shuffle(movies)
    selected_movies = movies[:5]
    return jsonify(selected_movies)

#API to fecth books database with genre_name
@api.route('/api/books/query', methods=["GET"])
@jwt_required(locations=["headers"])
def books():
    if not current_user:
        return jsonify({"message": "Login required"})
    data = request.args
    genre_name = data.get('genre_name')
    books = []
    response = list(db1.books_collection.find( {'categories': genre_name}))
    if response:
        books_fetched = response
        for book in books_fetched:
            book["_id"] = str(book["_id"])
            books.append(book)
    else:
        return jsonify({"Message": "Failed to fetched book genre"})
    random.shuffle(books)
    selected_books = books[:5]
    return jsonify(selected_books)

#API to fetch all movies from database
@api.route('/api/movies', methods=["GET"])
@jwt_required(locations=["headers"])
def movieslist():
    
    if not current_user:
        return jsonify({"message": "Login required"})
    movies = []
    response = list(db1.movies_collection.find())
    if response:
        movies_fetched = response
        for movie in movies_fetched:
            movie["_id"] = str(movie["_id"])
            movies.append(movie)
    else:
        pass
    return jsonify(movies)

#API to fetch trending movies
@api.route('/api/trending-movies', methods=["GET"])
#
def trendinglist():
    trending = []
    response = list(db1.trending_movies.find())
    if  response:
        trending_fetched = response
        for trend in trending_fetched:
            trend["_id"] = str(trend["_id"])
            trending.append(trend)
    else:
        pass
    return jsonify(trending)

#API route to fetch popular movies
@api.route('/api/popular-movies', methods=["GET"])
#
def popularlist():
    popular = []
    response = list(db1.popular_movies.find())
    if response:
        popular_fetched = response
        for item in popular_fetched:
            item["_id"] = str(item["_id"])
            popular.append(item)
    else:
        pass
    return jsonify(popular)

#API to fetch all books from database
@api.route('/api/books', methods=["GET"])
@jwt_required(locations=["headers"])
def bookslist():
    if not current_user:
        return jsonify({"message": "Login required"})
    books = []
    response = list(db1.books_collection.find())
    if response:
        books_fetched = response
        for book in books_fetched:
            book["_id"] = str(book["_id"])
            books.append(book)
    else:
        pass
    selected_books = books[:1000]
    return jsonify(selected_books)

#API to fetch books by author from database
@api.route('/api/books/authors', methods=["GET"])
#@jwt_required()
def authors():
    '''
    # if not current_user:
    #     return jsonify({"message": "Login required"})
    #     '''
    data = request.args
    books = []
    author = data.get("author")
    response = list(db1.books_collection.find({"authors": author}))
    if response:
        books_fetched = response
        for book in books_fetched:
            book["_id"] = str(book["_id"])
            books.append(book)
    else:
        return jsonify({"message": "No record of author"})
    random.shuffle(books)
    select = books[:5]
    return jsonify(select)

#API to fetch movies by year from database
@api.route('/api/movies/year', methods=["GET"])
#@jwt_required()
def year():
    '''
    if not current_user:
        return jsonify({"message": "Login required"})
        '''
    data = request.args
    movies = []
    year = int(data.get("year"))
    response = list(db1.movies_collection.find({"year": year}))
    if response:
        movies_fetched = response
        for movie in movies_fetched:
            movie["_id"] = str(movie["_id"])
            movies.append(movie)
    else:
        return jsonify({"message": "No record of year"})
    random.shuffle(movies)
    select = movies[:5]
    return jsonify(select)

#API to fetch books by year from database
@api.route('/api/books/years', methods=["GET"])
#@jwt_required()
def years():
    '''
    if not current_user:
        return jsonify({"message": "Login required"})
        '''
    data = request.args
    books = []
    year = data.get("year")
    response = list(db1.books_collection.find({"year": year}))
    if response:
        books_fetched = response
        for book in books_fetched:
            book["_id"] = str(book["_id"])
            books.append(book)
    else:
        return jsonify({"message": "No record of year"})
    random.shuffle(books)
    select = books[:5]
    return jsonify(select)
