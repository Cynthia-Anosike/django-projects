#Movie api from mongodb__
from pymongo import MongoClient
import json, requests
from dotenv import load_dotenv
import os

#Access
load_dotenv()
client = MongoClient()
db = client["suggestion"]
db.movies_collection.drop()
movies_collection = db["movies_collection"]
movies = []
page = range(1, 60)
count = 0
i = 0

api_key = os.getenv("MOVIES_API_KEY")

for i in page:
    response = requests.get("https://api.themoviedb.org/3/discover/movie", 
                        params={'api_key':'414c03dad70e05341be70c15207b06b0', 'page': i})
    if response.status_code == 200:
        movie_data = response.json()

        for movie in movie_data['results']:
            original_language = movie['original_language']
            title = movie['original_title']
            Review = movie['overview']
            release_date = movie['release_date']
            posterURL =movie['poster_path']
            genre_ids = movie['genre_ids']
            year = int(release_date[:4])
            backdrop_path= movie['backdrop_path']
            # homepage= movie['homepage']
            movies.append({
                    'title': title, 'genre': genre_ids, 'review': Review, 'original_language': original_language,
                    'release_date': release_date, 'posterURL': posterURL, 'year': year, 'backdrop_path': backdrop_path,
                    
                })
            count += 1
        
for docs in movies:
    movies_collection.insert_one(docs)
    i += 1

client.close()
print("Completed!", count, i)
##
