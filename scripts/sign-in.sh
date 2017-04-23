#EMAIL=danielle@danielle.com PASSWORD=prince sh scripts/sign-in.sh
API="${API_ORIGIN:-http://localhost:4741}"
  URL_PATH="/sign-in"
  curl "${API}${URL_PATH}" \
    --include \
    --request POST \
    --header "Content-Type: application/json" \
    --data '{
      "credentials": {
        "email": "'"${EMAIL}"'",
        "password": "'"${PASSWORD}"'"
      }
    }'

echo
