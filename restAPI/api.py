# -*- coding: utf-8 -*-
from flask import Flask, jsonify, abort, make_response
import peewee
# import json

db = peewee.SqliteDatabase("data.db")

class User(peewee.Model):
    userId = peewee.TextField()
    userCompany = peewee.TextField()
    userDiscountRate = peewee.IntegerField()

    class Meta:
        database = db

api = Flask(__name__)

@api.route('/getUser/<string:userId>', methods=['GET'])
def get_user(userId):
    print(User.get(User.userId == userId))
    try:

        user = User.get(User.userId == userId)
    except User.DoesNotExist:
        print("aaaaaaaaa")
        abort(404)

    result = {
        "result":True,
        "data":{
            "userId":user.userId,
            "userCompany":user.userCompany,
            "userDiscountRate":user.userDiscountRate
            }
        }

    return make_response(jsonify(result))
    # Unicodeにしたくない場合は↓
    # return make_response(json.dumps(result, ensure_ascii=False))

@api.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'aaaaa'}), 404)

if __name__ == '__main__':
    api.run(host='localhost', port=3000)