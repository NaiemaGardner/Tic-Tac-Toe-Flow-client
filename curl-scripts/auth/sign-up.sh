# sign-up.sh

curl "https://tic-tac-toe-api-development.herokuapp.com/sign-up" \
  --include \
  --request POST \
  --header "Content-type: application/json" \
  --data '{
    "credentials": {
      "name": "'"${NAME}"'",
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

echo
