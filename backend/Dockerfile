# Stage 1: Build Python environment
FROM python:3.10-alpine AS base

ENV PYTHONDONTWRITEBYTECODE 1

COPY req.txt .

RUN apk --no-cache add libpq-dev gcc python3-dev && rm -f /var/lib/apt/lists/*

RUN pip install --no-cache-dir -r req.txt


# Stage 2: Final image
FROM python:3.10-alpine

COPY --from=base /usr/local/lib/python3.10/site-packages /usr/local/lib/python3.10/site-packages
COPY --from=base /usr/local/bin/ /usr/local/bin/

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

WORKDIR /app

COPY . .

RUN chmod +x ./entrypoint.sh
ENTRYPOINT ["sh", "entrypoint.sh"]