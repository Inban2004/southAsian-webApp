from fastapi import Request
from fastapi.responses import JSONResponse

from app.ExceptionHandler.response import error_response


async def unhandled_exception_handler(request: Request, exc: Exception) -> JSONResponse:
    return JSONResponse(status_code=500, content=error_response(str(exc) or "Something went wrong"))
