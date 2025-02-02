import streamlit as st
from pathlib import Path
from PIL import Image


dir = Path(__file__).parent
css_file = dir / "styles" / "main.css"
resume_file = dir / "assets" / "resume.pdf"
profile_pic = dir / "assets" / "profile-pic.png"
favicon = dir / "assets" / "K.png"


PAGE_TITLE = "Kanak Tanwar"
PAGE_ICON = favicon
NAME = "Kanak Tanwar"
DESCRIPTION = "AI Engineer\nBackend Developer\nProblem Solver\n"
EMAIL = "kanaktanwarpro@gmail.com"
SOCIAL_MEDIA = {
    "LinkedIn": "https://www.linkedin.com/in/kanak-tanwar/",
    "GitHub": "https://github.com/kanakOS01",
    "Twitter": "https://x.com/kanaktwts",
}
SOCIAL_ICONS = {
    "LinkedIn": "🔗",
    "GitHub": "💻",
    "Twitter": "🐦",
}
PROJECTS = {
    "Git Chat": {
        "desc": "RAG-based Q&A with GitHub repositories",
        "github": "https://github.com/kanakOS01/git-chat",
    },
    "Social Media API": {
        "desc": "FastAPI CRUD operations with PostgreSQL and CI/CD with Github Actions",
        "github": "https://github.com/kanakOS01/social-media-fastapi",
    },
    "Movie Recommendation System": {
        "desc": "Content-based recommendation system",
        "github": "https://github.com/kanakOS01/movie-recommender-system",
    },
    "House Price Prediction": {
        "desc": "ML model with Flask and AWS EC2",
        "github": "https://github.com/kanakOS01/house-prediction-model",
    },
}
EXPERIENCE = {
    "MentorPal.ai": {
        "post": "AI Intern",
        "date": "June 2024 to July 2024",
    },
    "Deviators Club": {
        "post": "Club Lead",
        "date": "Februaru 2024 to -",
    },
}

st.set_page_config(page_title=PAGE_TITLE, page_icon=PAGE_ICON)

with open(css_file) as f:
    st.markdown(f"<style>{f.read()}</style>", unsafe_allow_html=True)
profile_pic = Image.open(profile_pic)

body = st.container(border=True)
col1, col2 = body.columns(2, gap="small")
with col1:
    body.image(profile_pic, width=230)