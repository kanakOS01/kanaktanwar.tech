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
    "Mail": f"mailto:{EMAIL}",
}
RESUME_LINK = "https://drive.google.com/file/d/17-Vd_Q7akVatBmQq1FaToH5nGEvEEI7V/view?usp=sharing"
PROJECTS = {
    "Git Chat": {
        "desc": "RAG-based Q&A with GitHub repositories",
        "github": "https://github.com/kanakOS01/git-chat",
    },
    "Social Media API": {
        "desc": "FastAPI CRUD ops with Postgres and CI/CD",
        "github": "https://github.com/kanakOS01/social-media-fastapi",
    },
    "Movie Recommender": {
        "desc": "Content-based Recommendation System",
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
        "date": "Jun 2024 to Jul 2024",
        "website": "https://www.mentorpal.ai/",
        "description": """
            - Engineered an extension to suggest personalized messages to prospective leads on LinkedIn.
            - Developed an internal tool to allow QA with various resumes using LangChain and LLM.
            - Scraped various websites using Selenium and BeautifulSoup to provide client leads.  
        """,
    },
    "Deviators Club": {
        "post": "Club Lead",
        "date": "Feb 2024 to Feb 2025",
        "website": "https://www.deviatorsdce.tech/",
        "description": """
            - Co-Founded a coding and development club in college.
            - Taught students about technologies like git, dsa and organised hackathons.
            - Built a community of 500+ members.
        """,
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
    st.markdown(
        """
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
    """,
        unsafe_allow_html=True,
    )
    st.markdown("\n")
    st.markdown(
        f'<a href="{RESUME_LINK}" target="_blank" class="btn" style="color: white">Resume     <i class="fa-regular fa-file"></i></a>',
        unsafe_allow_html=True,
    )


# experience
st.markdown("\n")
st.markdown("## Experience")
exp = st.container(border=True)
exp1, exp2 = exp.tabs(EXPERIENCE.keys())

with exp1:
    st.markdown(f"<h4>{EXPERIENCE['MentorPal.ai']['post']}</h4>", unsafe_allow_html=True)
    st.markdown(
        f"<p style='color: grey; font-size: 14px;'>{EXPERIENCE['MentorPal.ai']['date']}</p>", unsafe_allow_html=True
    )
    st.text(f"{EXPERIENCE['MentorPal.ai']['description']}")

# Experience in Deviators Club
with exp2:
    st.markdown(f"<h4>{EXPERIENCE['Deviators Club']['post']}</h4>", unsafe_allow_html=True)
    st.markdown(
        f"<p style='color: grey; font-size: 14px;'>{EXPERIENCE['Deviators Club']['date']}</p>", unsafe_allow_html=True
    )
    st.text(f"{EXPERIENCE['Deviators Club']['description']}")


# projects
st.markdown("\n")
st.markdown("## Projects")
p12 = st.container(border=False)
p34 = st.container(border=False)

p1, p2 = p12.columns(2, border=True)
with p1:
    st.markdown(f"<h4>Git Chat</h4>", unsafe_allow_html=True)
    st.markdown(f"<p style='color: grey; font-size: 16px;'>{PROJECTS['Git Chat']['desc']}</p>", unsafe_allow_html=True)
    st.markdown(
        f"""
        <div class="social-icons">
        <a class="social-icons" href="{PROJECTS['Git Chat']['github']}" target="_blank">
            <i class="fa-brands fa-square-github"></i>
        </a>
        </div>
        """,
        unsafe_allow_html=True,
    )
    st.markdown('\n')

with p2:
    st.markdown(f"<h4>Social Media API</h4>", unsafe_allow_html=True)
    st.markdown(f"<p style='color: grey; font-size: 16px;'>{PROJECTS['Social Media API']['desc']}</p>", unsafe_allow_html=True)
    st.markdown(
        f"""
        <div class="social-icons">
        <a class="social-icons" href="{PROJECTS['Social Media API']['github']}" target="_blank">
            <i class="fa-brands fa-square-github"></i>
        </a>
        </div>
        """,
        unsafe_allow_html=True,
    )
    st.markdown('\n')

p3, p4 = p34.columns(2, border=True)
with p3:
    st.markdown(f"<h4>Movie Recommender</h4>", unsafe_allow_html=True)
    st.markdown(f"<p style='color: grey; font-size: 16px;'>{PROJECTS['Movie Recommender']['desc']}</p>", unsafe_allow_html=True)
    st.markdown(
        f"""
        <div class="social-icons">
        <a class="social-icons" href="{PROJECTS['Movie Recommender']['github']}" target="_blank">
            <i class="fa-brands fa-square-github"></i>
        </a>
        </div>
        """,
        unsafe_allow_html=True,
    )
    st.markdown('\n')

with p4:
    st.markdown(f"<h4>House Price Prediction</h4>", unsafe_allow_html=True)
    st.markdown(f"<p style='color: grey; font-size: 16px;'>{PROJECTS['House Price Prediction']['desc']}</p>", unsafe_allow_html=True)
    st.markdown(
        f"""
        <div class="social-icons">
        <a class="social-icons" href="{PROJECTS['House Price Prediction']['github']}" target="_blank">
            <i class="fa-brands fa-square-github"></i>
        </a>
        </div>
        """,
        unsafe_allow_html=True,
    )
    st.markdown('\n')