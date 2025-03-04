from pathlib import Path

import streamlit as st


def main():
    dir = Path(__file__).parent
    routes_dir = dir / "routes"
    favicon = dir / "assets" / "k.png"

    PAGE_TITLE = "Kanak Tanwar"
    PAGE_ICON = favicon

    st.set_page_config(page_title=PAGE_TITLE, page_icon=PAGE_ICON)

    home_page = st.Page(page=routes_dir / "home.py", title="home", default=True, icon=":material/home:")
    blogs_page = st.Page(page=routes_dir / "blogs.py", title="blogs", icon=":material/library_books:")
    pulls_page = st.Page(page=routes_dir / "pulls.py", title="prs", icon=":material/folder_data:")

    with st.sidebar:
        st.markdown(
            f'<iframe src="https://github.com/sponsors/kanakOS01/button" title="Sponsor kanakOS01" height="32" width="114" style="border: 0; border-radius: 6px;"></iframe>',
            unsafe_allow_html=True,
        )

    pg = st.navigation([home_page, blogs_page, pulls_page], expanded=False, position="sidebar")
    pg.run()


if __name__ == "__main__":
    main()
