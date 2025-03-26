from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    DEV_TO_API_KEY: str

    class Config:
        env_file = ".env"


settings = Settings()
