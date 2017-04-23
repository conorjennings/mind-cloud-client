#ID=1 OLDPW=stella NEWPW=prince TOKEN=BAhJIiVlZjE2ODQzZDJhMzFkZjA0NmNhNTU2MmNkNjdjNmMxNwY6BkVG--553ec8a7149427eae3a3b45235870788f9dfb144 sh scripts/change-password.sh
API="${API_ORIGIN:-http://localhost:4741}"
  URL_PATH="/change-password/$ID"
  curl "${API}${URL_PATH}" \
    --include \
    --request PATCH \
    --header "Authorization: Token token=$TOKEN" \
    --header "Content-Type: application/json" \
    --data '{
    "passwords": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
    }
  }'

echo
