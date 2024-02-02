import lyricsgenius as lg


file = open("auto_.txt", "w")

genius = lg.Genius('jyZcttYhnRhzKlycmme5M58WK81kvqZtnvgF9FUoIZpYO7xeEKMuvdpjluWojDcW', skip_non_songs=True, excluded_terms=["(Remix)", "(Live)"], remove_section_headers=True)
def get_lyrics(arr, k):
    c = 0
    for name in arr:
        try:
            songs = (genius.search_artist(name, max_songs=k, sort='popularity')).songs
            s = [song.lyrics for song in songs]
            file.write("\n \n   <|endoftext|>   \n \n".join(s))
            c += 1
            print(f"Songs grabbed:{len(s)}")
        except:
            print(f"some exception at {name}: {c}")

get_lyrics(['Rihanna'], 3)