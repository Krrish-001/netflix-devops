from flask import Flask, render_template

app = Flask(__name__)

# Fake movie data (later we replace with API/DB)
movies = [
    {"image": "https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg"},
    {"image": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"},
    {"image": "https://image.tmdb.org/t/p/w500/rTh4K5uw9HypmpGslcKd4QfHl93.jpg"},
    {"image": "https://image.tmdb.org/t/p/w500/6agKYU5IQFpuDyUYPu39w7UCRrJ.jpg"},
]

@app.route("/")
def home():
    return render_template("index.html", movies=movies)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)