#This is the books API from mongodb
import requests
import json
from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

client = MongoClient()
db = client["suggestion"]
db.books_collection.drop()
books_collection = db["books_collection"]
books = []
books_fectehed = 0
total_books_fetched = 0
api_key = os.getenv("BOOKS_API_KEY")

category_list = ['History', 'Comedy', 'Science Fiction', 'Fantasy', 'Romance', 'Humor', 'Mystery', 'Geography', \
    'Science', 'Historical Fiction', 'Arts', 'Western', 'Culture', 'Biography', 'Autobiography', \
    'Poetry', 'Drama', 'Action', 'Adventure', 'Horror', 'Thriller', 'Crime', 'Children', 'Religion', \
    'Spirituality', 'Business', 'Economics', 'Health', 'Fitness', 'Sports', 'Cooking', 'Food', \
    'Juvenile Fiction', 'Juvenile Nonfiction', 'Young Adult Fiction', 'Young Adult Nonfiction', 
]


for genre in category_list:
    url = f"https://www.googleapis.com/books/v1/volumes?q=subject:{genre}&maxResults=40&key:{api_key}"

    try:
        response = requests.get(url)

        if response.status_code == 200:
            data = response.json()
            
            if genre is None:
                print(f"Genre: {genre} not found.")
                continue
            for book in data.get("items", []):
                volume_info = book.get("volumeInfo")
                title = volume_info.get("title")
                imageLinks = volume_info.get("imageLinks", {})
                authors = volume_info.get("authors", [])
                posterUrl = imageLinks.get("thumbnail", "")
                publishedDate = volume_info.get("publishedDate", "")
                description = volume_info.get("description", "No description available.")
                publisher = volume_info.get("publisher", "")
                maturityRating = volume_info.get("maturityRating", "")
                categories = volume_info.get("categories", [])
                genre = genre
                year = publishedDate[:4]

                books.append({
                    'title': title, 'authors': authors, 'category': genre, 'description': description,
                    'posterUrl': posterUrl, 'publishedDate': publishedDate, 'publisher': publisher,
                    'maturityRating': maturityRating, 'categories': categories, 'year': year
                })
                books_fectehed += 1
                total_books_fetched = books_fectehed + total_books_fetched
        else:
            print(f"HTTP Error: {response.status_code}")
        print(f"Books fetched: {books_fectehed}")
        print("=" * 100)
    except requests.exceptions.RequestException as e:
        print(f"Request Exception: {e}")

    for docs in books:
        try:
            books_collection.insert_one(docs)
            if docs.get("title") is not None:
                query = {"title": docs.get("title")}
                update = {"$push": {"categories": docs.get("category")}}
                if update is not None:
                    db.books_collection.update_one(query, update)
                else:
                    pass
            else:
                continue
        except Exception as e:
            pass

client.close()
print("=" * 100)
print(f"Total books fetched: {total_books_fetched}. \n Saved to database Successfully.")
##
