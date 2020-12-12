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
  "Transaction": ["SELECT", "UPDATE", "DELETE"],
  "Coupon": ["INSERT", "DELETE"]
}
```
#### Response 401 Unauthorized
```json
{
  "error_code": "401",
  "message": "Credenciales inválidas"
}
```

### `POST`: `/query`
#### Request header
```json
{
  "user": "usuario",
  "password": "contraseña"
}
```
#### Request body
```json
{
  "user": "usuario",
  "password": "contraseña",
  "resource": "Transaction",
  "action": "SELECT"
}
```
#### Response 200 OK
```json
{
  "results": [
    {
      "__resource": "Transaction",
      "id": "cf5e0cb9-a62e-474d-a9e3-253119514423",
      "attribute": "value",
      "other_attribute": "other value"
    },
    {
      "__resource": "Transaction",
      "id": "05b39334-e264-4366-94a6-f2006f5bfd47",
      "attribute": "value 2",
      "other_attribute": "other value 2"
    }
  ]
}
```
#### Response 401 Unauthorized
```json
{
  "error_code": "401",
  "message": "Credenciales inválidas"
}
```
