from flask import Flask, render_template
import mysql.connector

app = Flask(__name__)

def get_db_connection():
    return mysql.connector.connect(
        host="db",
        user="root",
        password="root",
        database="netflix"
    )

@app.route('/')
def home():
    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute("CREATE TABLE IF NOT EXISTS visits (count INT)")
    cursor.execute("SELECT count FROM visits")

    result = cursor.fetchone()

    if result is None:
        cursor.execute("INSERT INTO visits (count) VALUES (1)")
        count = 1
    else:
        count = result[0] + 1
        cursor.execute("UPDATE visits SET count=%s", (count,))

    conn.commit()
    cursor.close()
    conn.close()

    return render_template("index.html", count=count)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)