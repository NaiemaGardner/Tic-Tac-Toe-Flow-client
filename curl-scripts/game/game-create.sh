# create-game.sh

curl "https://tic-tac-toe-api-development.herokuapp.com/game" \
  --include \
  --request POST \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{}'

echo
