import requests
from pymongo import MongoClient
from lyricsgenius import Genius


genius = Genius('')
client = MongoClient()
db = client["suggestion"]
db.music_collection.drop()
music_collection = db["music_collection"]
music = []
music_fectehed = 0
total_music_fetched = 0
count = 0
page_list = range(1)
genre_list = ['afrobeat', 'azonto', 'pop', 'country', 'rock', 'rap']
client_id = ''
client_secret = ''

base_url = 'https://api.genius.com'
auth_endpoint = '/oauth/token'
data = {
    'grant_type': 'client_credentials',
    'client_id': client_id,
    'client_secret': client_secret
}

response = requests.post(base_url + auth_endpoint, data=data)

try:
    if response.status_code == 200:
        token_data = response.json()
        access_token = token_data['access_token']

    for genre in genre_list:
        for page in page_list:
            search_endpoint = '/search'
            headers = {'Authorization': f'Bearer {access_token}'}
            params = {'q': genre, 'per_page': 50, 'page': page}
            response = requests.get(base_url + search_endpoint, params=params, headers=headers)
 
            if response.status_code == 200:
                data = response.json()

                if genre is None:
                    print(f"Genre: {genre} not found.")
                    continue

                for hit in data['response']['hits']:
                    song_info = hit['result']

                    song_title = song_info['title']
                    song_artist = song_info['primary_artist']['name']
                    year = song_info.get('release_date', 'Release Date Not Found')
                    song_id = song_info['id']
                    lyrics = genius.lyrics(song_id)
                    count += 1

                    cover_image = song_info['header_image_thumbnail_url']
                    print(song_title)
                    print(count)
                    music.append({
                        "title": song_title, "artist": song_artist, "year": year, "song_id": song_id,
                        "lyrics": lyrics, "cover_image": cover_image, "category": genre
                    })
            else:   
                print("Error:", response.status_code)
        for docs in music:
           try:
            music_collection.insert_one(docs)
           except Exception as e:
            pass     
    print(f"Music fetched: {count}")   
except requests.exceptions.RequestException as e:
    print(f"Request Exception: {e}") 

client.close()
print("Music saved in database successfully")