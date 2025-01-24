from pathlib import Path

import streamlit as st
from PIL import Image

current_dir = Path(__file__).parent
css_file = current_dir / "styles" / "main.css"
resume_file = current_dir / "assets" / "Resume.pdf"
profile_pic = current_dir / "assets" / "profile-pic.png"
k_pic = current_dir / "assets" / "K.png"

PAGE_TITLE = "Kanak Tanwar"
PAGE_ICON = k_pic
NAME = "Kanak Tanwar"
DESCRIPTION = """
AI Engineer\n
Backend Developer\n
Problem Solver\n
"""
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
    "Git Chat - RAG-based Q&A with GitHub repositories": "https://github.com/kanakOS01/git-chat",
    "Social Media API - FastAPI CRUD operations with PostgreSQL": "https://github.com/kanakOS01/social-media-fastapi",
    "Movie Recommendation System - Content-based model": "https://github.com/kanakOS01/movie-recommender-system",
    "House Price Prediction - ML model with Flask and AWS EC2": "https://github.com/kanakOS01/house-prediction-model",
}

st.set_page_config(page_title=PAGE_TITLE, page_icon=PAGE_ICON)

# --- LOAD CSS, PDF & PROFILE PIC ---
with open(css_file) as f:
    st.markdown("<style>{}</style>".format(f.read()), unsafe_allow_html=True)
with open(resume_file, "rb") as pdf_file:
    PDFbyte = pdf_file.read()
profile_pic = Image.open(profile_pic)

# --- HERO SECTION ---
col1, col2 = st.columns(2, gap="small")
with col1:
    st.image(profile_pic, width=230)

with col2:
    st.title(NAME)
    st.write(DESCRIPTION)
    st.download_button(
        label=" 📄 Download Resume",
        data=PDFbyte,
        file_name=resume_file.name,
        mime="application/octet-stream",
    )
    st.write("📫", EMAIL)

# --- SOCIAL LINKS ---
st.write('\n')
social_col = st.columns([8, 1])
with social_col[1]:
    for platform, link in SOCIAL_MEDIA.items():
        icon = SOCIAL_ICONS.get(platform, "🌐")
        st.write(f"[{icon}]({link})")

# --- EXPERIENCE & QUALIFICATIONS ---
st.write('\n')
st.subheader("Experience")
st.write(
    """
- ✔️ Developed AI tools using LangChain and LLMs to improve resume QA.
- ✔️ Built a Chrome extension for personalized LinkedIn messaging.
- ✔️ Scraped websites using Selenium and BeautifulSoup for lead generation.
- ✔️ Collaborated with a team to implement solutions driving growth.
"""
)

# --- SKILLS ---
st.write('\n')
st.subheader("Skills")
st.write(
    """
- 👩‍💻 Programming: Python, Java, C/C++, JavaScript, R, Bash
- 🌐 Web Development: HTML, CSS, JS, Flask, FastAPI
- 📊 Data Science: NumPy, Pandas, Scikit-learn, LangChain
- 🗄️ Databases: MySQL, MongoDB, PostgreSQL, SQLAlchemy
- ⚙️ Tools: Git, Linux, Docker, AWS, Streamlit, BeautifulSoup, Selenium
"""
)

# --- WORK HISTORY ---
st.write('\n')
st.subheader("Work History")
st.write("---")

st.write("🚧", "**AI Intern | Mentorpal.ai**")
st.write("06/2024 - 07/2024")
st.write(
    """
- ► Engineered tools for personalized LinkedIn messaging and resume QA.
- ► Built web scrapers for client lead generation.
- ► Collaborated on innovative solutions for company growth.
"""
)

# --- PROJECTS & ACCOMPLISHMENTS ---
st.write('\n')
st.subheader("Projects & Accomplishments")
st.write("---")
for project, link in PROJECTS.items():
    st.write(f"[{project}]({link})")