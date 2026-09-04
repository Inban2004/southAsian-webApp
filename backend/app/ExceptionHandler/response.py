from typing import Any


def success_response(message: str, data: Any = None, status_code: int = 200) -> dict:
    return {"message": message, "statusCode": status_code, "data": data}


def error_response(message: str, status_code: int = 500) -> dict:
    return {"message": message, "statusCode": status_code, "data": None}
