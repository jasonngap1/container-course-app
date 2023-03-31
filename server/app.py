import time
import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector as db

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def get_current_time():
    return jsonify({'time': time.time(), 'args': request.args.get("text")}), 200

@app.route('/retrieve_database', methods=['GET'])
def retrieve_database():
    try:
        mydb = db.connect(
            host="sql",
            user="user",
            password="password"
        )

        # connect to database and retrieve data
        cur = mydb.cursor(buffered=True)
        cur.execute("CREATE TABLE db.Orders (OrderTime datetime, Item varchar(100) NOT NULL);")
        mydb.commit()
        cur.execute('SELECT * FROM db.Orders')
        result = cur.fetchall()

        # close connection
        if mydb:
            cur.close()
            mydb.close()

    except Exception as e:
        print(e)
        return jsonify({'status': 500, 'error': str(e)}), 500
    
    return jsonify({'status': 200, 'data': str(result)}), 200

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port)