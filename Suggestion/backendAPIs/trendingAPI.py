import json, requests
import os
from dotenv import load_dotenv
from pymongo import MongoClient

# Set up MongoDB connection
# client = MongoClient('mongodb://localhost:27017/')
load_dotenv()
# db = client['movieApp']
client = MongoClient()
db = client["suggestion"]
db.trending_movies.drop()  # Drop the existing collection to start fresh
popular = []
page = range(1, 60)
count = 0
i = 0

# API key
api_key = os.getenv("MOVIES_API_KEY")

# Make request
url = f'https://api.themoviedb.org/3/trending/movie/week'
response = requests.get(url, params={'api_key': api_key, 'append_to_response': "videos"})

if response.status_code == 200:
    trending_movies_data = response.json()['results']
    movies_list = []

    for movie in trending_movies_data:
        # Extract movie details
        original_language = movie['original_language']
        title = movie['title']
        overview = movie['overview']
        release_date = movie['release_date']
        posterURL = movie['poster_path']
        genre_ids = movie['genre_ids']
        year = release_date[:4]
        backdrop_path = movie['backdrop_path']
        video = movie['video']
        videos = movie.get('videos', [])  # Fetch videos if available, empty list by default

        movie_data = {
            'title': title,
            'genre': genre_ids,
            'review': overview,
            'original_language': original_language,
            'release_date': release_date,
            'posterURL': posterURL,
            'year': year,
            'backdrop_path': backdrop_path,
            'video': video,
            'videos': videos
        }

        movies_list.append(movie_data)

    # Insert into the popular_movies collection
    db.trending_movies.insert_many(movies_list)

print('trending movies fetched!')
