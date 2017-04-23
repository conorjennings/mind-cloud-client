#ID=1 TOKEN=BAhJIiVlZjE2ODQzZDJhMzFkZjA0NmNhNTU2MmNkNjdjNmMxNwY6BkVG--553ec8a7149427eae3a3b45235870788f9dfb144 sh scripts/sign-out.sh
API="${API_ORIGIN:-http://localhost:4741}"
  URL_PATH="/sign-out/$ID"
  curl "${API}${URL_PATH}" \
    --include \
    --request DELETE \
    --header "Authorization: Token token=$TOKEN"

echo
