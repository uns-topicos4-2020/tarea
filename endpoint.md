### `POST`: `/login`
#### Request
```json
{
  "user": "usuario",
  "password": "contraseña"
}
```
#### Response 200 OK
```json
{
  "role": "rol",
  "resources": {
    "Transaction": ['r', 'w']
  }
}
```
#### Response 401 Unauthorized
```json
{
  "error_code": "401",
  "message": "Credenciales inválidas"
}
```
