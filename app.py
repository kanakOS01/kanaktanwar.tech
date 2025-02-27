from pathlib import Path

import streamlit as st
from PIL import Image


def main():
    dir = Path(__file__).parent
    routes_dir = dir / "routes"

    home_page = st.Page(page=routes_dir / "home.py", title="home")
    blogs_page = st.Page(page=routes_dir / "blogs.py", title="blogs")
    pulls_page = st.Page(page=routes_dir / "pulls.py", title="pulls")

    pg = st.navigation([home_page, blogs_page, pulls_page])
    pg.run()


if __name__ == "__main__":
    main()
