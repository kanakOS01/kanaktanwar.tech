import streamlit as st
from pathlib import Path
from PIL import Image


dir = Path(__file__).parent
css_file = dir / "styles" / "main.css"
profile_pic = dir / "assets" / "profile-pic.png"
favicon = dir / "assets" / "k.png"


PAGE_TITLE = "Kanak Tanwar"
PAGE_ICON = favicon
NAME = "Kanak Tanwar"
DESCRIPTION = """
**AI Engineer**  
**Backend Developer**  
**Problem Solver**  
"""
EMAIL = "kanaktanwarpro@gmail.com"
SOCIAL_MEDIA = {
    "LinkedIn": "https://www.linkedin.com/in/kanak-tanwar/",
    "GitHub": "https://github.com/kanakOS01",
    "X": "https://x.com/kanaktwts",
    "Dev.to": "https://dev.to/kanakos01",
    "Mail": f"mailto:{EMAIL}"
}
SOCIAL_ICONS = {
    "LinkedIn": "🔗",
    "GitHub": "💻",
    "X": "🐦",
}
RESUME_LINK = "https://drive.google.com/file/d/17-Vd_Q7akVatBmQq1FaToH5nGEvEEI7V/view?usp=sharing"
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
        "date": "February 2024 to -",
    },
}

st.set_page_config(page_title=PAGE_TITLE, page_icon=PAGE_ICON)

with open(css_file) as f:
    st.markdown(f"<style>{f.read()}</style>", unsafe_allow_html=True)
profile_pic = Image.open(profile_pic)


# intro
intro_c1, intro_c2 = st.columns(2, gap="small")
with intro_c1:
    st.image(profile_pic, width=300)
with intro_c2:
    st.title(NAME)
    st.markdown(DESCRIPTION)
    st.markdown("""
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">

    <div class="social-icons">
        <a href="https://www.linkedin.com/in/kanak-tanwar/" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/kanakOS01" target="_blank">
            <i class="fa-brands fa-square-github"></i>
        </a>
        <a href="https://x.com/kanaktwts" target="_blank">
            <i class="fa-brands fa-square-x-twitter"></i>
        </a>
        <a href="https://dev.to/kanaktanwar" target="_blank">
            <i class="fa-brands fa-dev"></i>
        </a>
        <a href="mailto:kanaktanwarpro@gmail.com" target="_blank">
            <i class="fa-solid fa-envelope"></i>
        </a>
    </div>
    """, unsafe_allow_html=True)
    st.markdown("\n")
    st.markdown(
    f'<a href="{RESUME_LINK}" target="_blank" class="btn" style="color: white">Resume     <i class="fa-regular fa-file"></i></a>',
    unsafe_allow_html=True
)

st.divider()