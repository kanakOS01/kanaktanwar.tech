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
    "Leetcode": "https://leetcode.com/u/kanaktanwarpro/",
    "Codechef": "https://www.codechef.com/users/kanaktanwarpro",
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
SKILLS = {
    "Languages": "Python, Bash, SQL, JavaScript",
    "Frameworks": "FastAPI, Flask, LangChain, BS4, Selenium",
    "AIML": "NumPy, Pandas, Matplotlib, Scikit Learn, Transformers",
    "Database & ORM": "PostgreSQL, PostgreSQL, SQLAlchemy, Alembic",
    "Tools": "Github Actions, AWS EC2, DigitalOcean Droplet, Docker",
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
        <a title="linkedin" href="https://www.linkedin.com/in/kanak-tanwar/" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
        </a>
        <a title="github" href="https://github.com/kanakOS01" target="_blank">
            <i class="fa-brands fa-square-github"></i>
        </a>
        <a title="x" href="https://x.com/kanaktwts" target="_blank">
            <i class="fa-brands fa-square-x-twitter"></i>
        </a>
        <a title="dev.to" href="https://dev.to/kanakos01" target="_blank">
            <i class="fa-brands fa-dev"></i>
        </a>
        <a title="mail" href="mailto:kanaktanwarpro@gmail.com" target="_blank">
            <i class="fa-solid fa-envelope"></i>
        </a>
        <a title="leetcode" href="mailto:kanaktanwarpro@gmail.com" target="_blank">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="26px" width="26px" xmlns="http://www.w3.org/2000/svg" data-darkreader-inline-fill="" data-darkreader-inline-stroke="" style="--darkreader-inline-fill: currentColor; --darkreader-inline-stroke: currentColor;"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"></path></svg>
        </a>
        <a title="codechef" href="mailto:kanaktanwarpro@gmail.com" target="_blank">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="26px" width="26px" xmlns="http://www.w3.org/2000/svg" data-darkreader-inline-fill="" data-darkreader-inline-stroke="" style="--darkreader-inline-fill: currentColor; --darkreader-inline-stroke: currentColor;"><path d="M11.2574.0039c-.37.0101-.7353.041-1.1003.095C9.6164.153 9.0766.4236 8.482.694c-.757.3244-1.5147.6486-2.2176.7027-1.1896.3785-1.568.919-1.8925 1.3516 0 .054-.054.1079-.054.1079-.4325.865-.4873 1.73-.325 2.5952.1621.5407.3786 1.0282.5408 1.5148.3785 1.0274.7578 2.0007.92 3.1362.1622.3244.3235.7571.4316 1.1897.2704.8651.542 1.8383 1.353 2.5952l.0057-.0028c.0175.0183.0301.0387.0482.0568.0072-.0036.0141-.0063.0213-.0099l-.0213-.5849c.6489-.9733 1.5673-1.6221 2.865-1.8925.5195-.1093 1.081-.1497 1.6625-.1278a8.7733 8.7733 0 0 1 1.7988.2357c1.4599.3785 2.595 1.1358 2.6492 1.7846.0273.3549.0398.6952.0326 1.0364-.001.064-.0046.1285-.007.193l.1362.0682c.075-.0375.1424-.107.2059-.1902.0008-.001.002-.002.0028-.0028.0018-.0023.0039-.0061.0057-.0085.0396-.0536.0747-.1236.1107-.1931.0188-.0377.0372-.0866.0554-.1292.2048-.4622.362-1.1536.538-1.9635.0541-.2703.1092-.4864.1633-.7027.4326-.9733 1.0266-1.8382 1.6213-2.6492.9733-1.3518 1.8928-2.5962 1.7846-4.0561-1.784-3.4608-4.2718-4.0017-5.5695-4.272-.2163-.0541-.3233-.0539-.4856-.108-1.3382-.2433-2.4945-.3953-3.6046-.3648zm5.0428 14.3788a9.8602 9.8602 0 0 0-.0326-.9824c-.0541-.703-1.1892-1.46-2.7032-1.8386-.588-.1336-1.1764-.2142-1.7448-.2356-.539-.0137-1.0657.0248-1.5546.1277-1.2436.2704-2.2162.9193-2.811 1.8925l.0511 1.431c.6672-.3558 1.7326-.8747 3.139-.9994.0662-.0059.1368-.0059.2044-.0099.1177-.013.2667-.044.4444-.044 1.6075 0 3.2682.5336 4.8767 1.6483.039-.2744.0611-.549.071-.8234l.044.0227c.0028-.0622.0143-.1268.0156-.1888zM11.256.0578c.1239-.0034.2538.01.379.0114-.23-.0022-.4588.0026-.6871.0156.103-.0061.2046-.0242.308-.027zm.4983.0156c.6552.014 1.3255.0711 2.0387.1803-.6834-.0987-1.3646-.1671-2.0387-.1803zm-1.3147.0554c-.076.0087-.1527.0133-.2285.0241-.8168.1167-1.7742.7015-2.75 1.045.3545-.1323.7143-.2957 1.0747-.4501C9.0765.4774 9.6705.207 10.1571.1529c.0939-.0139.1886-.0133.2825-.0241zm-.2285.24c.1622 0 .3787-.0002.5409.0539-.1425-.0357-.2595-.026-.3706-.0142a1.174 1.174 0 0 1 .3166.0681c.5796 1.0012-.4264 5.2791-.6786 8.1492.1559 1.0276.3138 1.9963.4628 2.7201-.7029-1.7843-1.4067-4.921-1.5148-7.354-.054-.9733.001-1.8386.2172-2.4874C9.401.8557 9.7244.4228 10.2111.3687zm3.1361.271c-.811 2.1088-.9184 6.1092-.9725 7.3528-.054.5407-.0001 1.73.054 2.5952 0 .2163.054.4325.054.6488 0-.2163-.054-.3786-.054-.5948-.4326-3.2442-.974-7.1362.9185-10.002zm3.352.3777c-.2704 2.1628-1.4047 3.191-1.7832 5.2998-.1081 1.6762-.325 3.6222-.379 5.2984-.0541-1.6762-.0007-3.4601.2697-5.2444.2703-1.8384.8651-3.6776 1.8925-5.3538zm-10.381.433c-.3581.1194-.632.248-.8575.3805.2317-.1358.4996-.2666.8575-.3805zm.2101.1974c.2155.0025.4384.0734.6006.2357-.0067-.004-.0078-.0033-.0142-.0071.1331.0929.2666.2093.3932.3847-.2036.9673.2553 3.0317.0398 4.6694.0763 1.5485.0717 3.1804.849 4.4594-.9796-1.5107-1.176-3.4375-1.3218-5.236-.1128-1.0907-.2035-2.0969-.4642-2.9033-.144-.3047-.2684-.5745-.3833-.822-.0247-.0369-.0447-.0784-.071-.1135-.1082-.1082-.1619-.2696-.1619-.3777 0-.054.0539-.1618.108-.1618.054-.0541.1616-.0553.2157-.1094a1.013 1.013 0 0 1 .2101-.0184zm-1.3459.6133c-.0604.0201-.0923.041-.1405.061.1768-.034.3617.0339.5196.318-.1877.8916.4364 3.3685.4288 5.104.3124 1.8478.5496 3.8498 1.5716 5.1152C6.3723 11.5076 5.886 9.1286 5.5076 7.128 5.183 5.56 4.9125 4.2086 4.3718 3.776c-.054-.1081-.1079-.163-.1079-.2711 0-.1622-.0002-.3786.1079-.5949-.2772.6337-.4047 1.2673-.3706 1.901-.0445-.6487.0857-1.2905.3706-1.901 0-.054.054-.0538.054-.1079.012-.016.0314-.0349.044-.0511.0618-.0983.1308-.189.2257-.257.0557-.0615.0965-.1191.159-.1817-.0526.0555-.0872.1092-.1335.1647.0273-.018.0523-.0368.0838-.0525.1081-.1082.2154-.1633.3776-.1633zm-.3776.1633c-.0038.0075-.0076.0111-.0114.0184.0125-.0099.0242-.0208.037-.0298-.0074.0037-.0182.0077-.0256.0114zm14.7608 1.1343c-.0017.0052-.004.0104-.0057.0156.0378-.005.0751-.0173.1135-.0156-.0378-.0022-.0763.0103-.115.0199-.8634 2.6418-1.8874 5.2844-2.9118 7.9262a.0184.0184 0 0 1-.0015.0028c-.0874.4652-.234.8842-.5395 1.1898.4326-.4867.4854-1.1907.5395-2.0558.054-.811.0544-1.6761.487-2.5413 0-.0531.0012-.1058.0525-.159.0003-.0009.0012-.0019.0015-.0028.0973-.3524.202-.6885.3166-1.018.4183-1.2896 1.1396-3.1653 2.0131-3.3405.0163-.0052.034-.018.0497-.0213zM8.3726 16.2113l-.3238.1079c.1623.2163.2696.379.3777.433.1081.054.2168.108.379.108.0541 0 .1618 0 .2159-.054l.812-.2698c.0541 0 .1078-.054.1619-.054.1081 0 .1616 0 .2697.054l.2712.2698.2697-.054c-.1081-.1622-.2695-.3236-.3776-.3776-.1082-.0541-.2169-.1094-.379-.1094h-.108l-.866.3252h-.1618c-.1082 0-.2157 0-.2698-.054-.054-.054-.163-.1629-.2712-.3251zm-2.5953.541c-.2703.1621-.649.4324-1.1897.6487-.5407.2163-.9734.4325-1.1897.6488-.2163.2163-.3237.4326-.3237.6488 0 .1082.0537.1632.1618.2172.054.0541.1632.0539.2172.108.757.3244 1.5133.7019 2.2162 1.0803.1082.0541.2171.1632.2712.2173.054.054.1078.054.1618.054.1082 0 .2695-.0538.3777-.162.1081-.108.1632-.217.1632-.325 0-.1082-.055-.1618-.1632-.2158 0 0-.4328-.2165-1.1898-.541-.4866-.2162-.9179-.4326-1.1883-.5948.1623-.2704.486-.4865.9726-.7028.5407-.2163.9196-.4326 1.0818-.5948.054-.0541.054-.1078.054-.1619 0-.054-.0539-.1631-.108-.2172-.054-.054-.163-.1079-.2711-.1079zm11.247 0c-.054 0-.1618.0537-.2158.1078-.0541.1081-.1093.1632-.1093.2172v.054c.1622.1622.3797.2695.7041.3776.2704.054.5403.1632.8107.2172.3244.1082.5407.2693.6488.4856v.0553c0 .0541-.1088.1616-.3251.2698-.1082.054-.3245.2167-.5949.433-.2703.1622-.4326.3236-.5948.3776-.2163.1082-.3776.217-.4316.3252-.0541.054-.054.1077-.054.1618 0 .1081.0539.1077.108.2158.054.1081.1616.1093.2157.1093.054 0 .1078-.0554.1619-.0554.2703-.1622.6492-.3782 1.0818-.7567.4866-.3784.8655-.6484 1.0818-.8106.2163-.1082.3237-.2169.3237-.379 0-.0541.0002-.1618-.1079-.2159-.3785-.4325-.9185-.7022-1.5674-.9185-.1081-.0541-.2704-.1092-.5948-.1633-.1622-.054-.3249-.1079-.433-.1079zm-2.9743.8106c-.2704 0-.4866.055-.6488.2172-.2163.1622-.2699.4323-.2158.7567 0 .2703.1075.4865.2697.7027.1622.2163.3786.3252.5949.3252.1622 0 .2708-.0553.433-.1094.2703-.1622.379-.4319.379-.9185 0-.3785-.109-.6485-.2711-.8107-.1622-.1081-.3246-.1632-.541-.1632zm-4.4877.054c-.2704 0-.4866.055-.6488.2171-.2163.1622-.27.4323-.2158.7567 0 .2704.1075.4865.2697.7028s.3786.3251.5949.3251c.1622 0 .2708-.0552.433-.1093.2703-.1622.3776-.432.3776-.9186 0-.4325-.1075-.7025-.2697-.8106-.1622-.1082-.3247-.1633-.541-.1633zm0 .6501c.1622 0 .2711.1076.2711.2698 0 .1622-.163.2697-.2711.2697-.1622 0-.2698-.1075-.2698-.2697s.1076-.2698.2698-.2698zm4.3798.054c.1622 0 .2711.1075.2711.2697 0 .1082-.109.2698-.2711.2698-.1622 0-.2698-.1076-.2698-.2698 0-.1622.1076-.2697.2698-.2697zm-2.7032 2.1083l.1619.3237c.054.1081.1076.163.2158.2711.054.054.163.1619.2712.1619h.1078c.1082 0 .1618 0 .2158-.054.0541-.054.1632-.0538.2173-.1079l.1618-.1618c.054-.054.108-.1092.108-.1633.054-.054.0537-.1078.1078-.1618 0-.0541.054-.108.054-.108-.0541.1082-.1618.2156-.2158.3238-.1082.054-.1616.1632-.2698.1632-.1081.0541-.217.054-.3251.054s-.2157.0001-.2697-.054c-.1082 0-.1632-.0538-.2173-.1079l-.1618-.1632c-.054-.0541-.1078-.1618-.1619-.2158zm-.866 1.0278c-1.1355 0-1.8377 1.5136-3.4598.1619-.4326 2.6494 2.7583 2.866 4.11 1.7306.9192-.811.6475-1.9465-.6502-1.8925zm2.8664 0c-1.2977-.054-1.568 1.0815-.6488 1.8925 1.3518 1.1355 4.5412.9188 4.1087-1.7306-1.6221 1.3517-2.2703-.1619-3.4599-.1619z"></path></svg>
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
exp = st.container(border=False)
exp1, exp2 = exp.container(border=True), exp.container(border=True)

with exp1:
    exp1.html("""
    <b style='font-size: 24px;'> AI Intern </b> 
    <br>
    <b style='color: grey; font-size: 18px;'> Mentorpal.ai </b>
    <br>
    <b style='color: grey; font-size: 14px; font-weight: 100;'> Jun 2024 to Jul 2024 </b>
    """)
    exp1.text(f"{EXPERIENCE['MentorPal.ai']['description']}")

with exp2:
    exp2.html("""
    <b style='font-size: 24px;'> Club Lead </b> 
    <br>
    <b style='color: grey; font-size: 18px;'> Deviators Club </b>
    <br>
    <b style='color: grey; font-size: 14px; font-weight: 100;'> Feb 2024 to Feb 2025 </b>
    """)
    exp2.text(f"{EXPERIENCE['Deviators Club']['description']}")


# skills
st.markdown("\n")
st.markdown("## Skills")
skills = st.container(border=True)

skills.html("""
    <div style="font-family: Arial, sans-serif; color: #ccc; font-size: 20px;">
        <p>Languages</p>
        <p style="color: white; margin-top: -10px;">Python, Bash, SQL, JavaScript</p>
        <hr style="height: 0.5px; border-color: #464849;"/>

        <p>Frameworks</p>
        <p style="color: white; margin-top: -10px;">FastAPI, Flask, LangChain, BS4, Selenium</p>
        <hr style="height: 0.5px; border-color: #464849;"/>

        <p>AIML</p>
        <p style="color: white; margin-top: -10px;">NumPy, Pandas, Matplotlib, Scikit Learn, Transformers</p>
        <hr style="height: 0.5px; border-color: #464849;"/>

        <p>Database & ORM</p>
        <p style="color: white; margin-top: -10px;">PostgreSQL, SQLAlchemy, Alembic</p>
        <hr style="height: 0.5px; border-color: #464849;"/>

        <p>Tools</p>
        <p style="color: white; margin-top: -10px;">Github Actions, AWS EC2, DigitalOcean Droplet, Docker</p>
    </div>
""")


# projects
st.markdown("\n")
st.markdown("## Projects")
p12 = st.container(border=False)
p34 = st.container(border=False)

p1, p2 = p12.columns(2, border=True)
with p1:
    p1.html(f"""
        <b style='font-size: 24px;'>Git Chat</b>
        <p style='color: grey; font-size: 16px;'>{PROJECTS['Git Chat']['desc']}</p>
        <div class="social-icons">
        <a class="social-icons" href="{PROJECTS['Git Chat']['github']}" target="_blank">
            <i class="fa-brands fa-square-github"></i>
        </a>
        </div>
    """)
    p1.markdown('\n')

with p2:
    p2.html(f"""
        <b style='font-size: 24px;'>Social Media API</b>
        <p style='color: grey; font-size: 16px;'>{PROJECTS['Social Media API']['desc']}</p>
        <div class="social-icons">
        <a class="social-icons" href="{PROJECTS['Social Media API']['github']}" target="_blank">
            <i class="fa-brands fa-square-github"></i>
        </a>
        </div>
    """)
    p2.markdown('\n')

p3, p4 = p34.columns(2, border=True)
with p3:
    p3.html(f"""
        <b style='font-size: 24px;'>Movie Recommender</b>
        <p style='color: grey; font-size: 16px;'>{PROJECTS['Movie Recommender']['desc']}</p>
        <div class="social-icons">
        <a class="social-icons" href="{PROJECTS['Movie Recommender']['github']}" target="_blank">
            <i class="fa-brands fa-square-github"></i>
        </a>
        </div>
    """)
    p3.markdown('\n')

with p4:
    p4.html(f"""
        <b style='font-size: 24px;'>House Price Prediction</b>
        <p style='color: grey; font-size: 16px;'>{PROJECTS['House Price Prediction']['desc']}</p>
        <div class="social-icons">
        <a class="social-icons" href="{PROJECTS['House Price Prediction']['github']}" target="_blank">
            <i class="fa-brands fa-square-github"></i>
        </a>
        </div>
    """)
    p4.markdown('\n')