#TOKEN=BAhJIiUzMDk4MWRiOWY4ZDUzZmVlYjc2OTdmNGQ5MDBiZDIxMgY6BkVG--6fb69bcbfbf7b93910a0b6414a26c8bcaf09383d sh scripts/users.sh
API="${API_ORIGIN:-http://localhost:4741}"
  URL_PATH="/users"
  curl "${API}${URL_PATH}" \
    --include \
    --request GET \
    --header "Authorization: Token token=$TOKEN" \

echo
