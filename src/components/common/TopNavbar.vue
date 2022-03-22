<template>
<header id="header">
    <h1>
        <a href="/">
            <img src="@/assets/images/logo.png" alt="project bunny">
        </a>
    </h1>
    <nav>
    <ul class="navbar">
        <li><a href="story">STORY</a></li>
        <li><a href="story">BUNNY NFT</a></li>
        <li><a href="story">ROADMAP</a></li>
        <li><a href="story">TEAM</a></li>
        <li><a href="story">PARTNER</a></li>
        <li><a href="story">FAQ</a></li>
    </ul>
    </nav>
    <div id="link">
        <q-icon name="link" size="lg" color="grey-7">
            <q-icon name="expand_more" size="sm" id="downBtn" color="grey-7"></q-icon>
        <q-menu style="max-width: 300px;"
          transition-show="jump-down"
          transition-hide="jump-up"
        >
          <q-list>
            <q-item clickable>
                <a href="#" class="row items-center">
                    <div class="row items-center q-px-md">
                        <img src="@/assets/images/icon_github.png" />
                        <span class="q-pl-lg">GitHub</span>
                    </div>
                </a>
            </q-item>
            <q-item clickable>
                <a href="#" class="row items-center">
                    <div class="row items-center q-px-md">
                        <img src="@/assets/images/icon_kakao.png" />
                        <span class="q-pl-lg">Kakao</span>
                    </div>
                </a>
            </q-item>
            <q-item clickable>
                <a href="#" class="row items-center">
                    <div class="row items-center q-px-md">
                        <img src="@/assets/images/icon_discord.png" />
                        <span class="q-pl-lg">Discord</span>
                    </div>
                </a>
            </q-item>
            <q-item clickable>
                <a href="#" class="row items-center">
                    <div class="row items-center q-px-md">
                        <img src="@/assets/images/icon_twitter.png" />
                        <span class="q-pl-lg">Twitter</span>
                    </div>
                </a>
            </q-item>
            <q-item clickable>
                <a href="#" class="row items-center">
                    <div class="row items-center q-px-md">
                        <img src="@/assets/images/icon_instagram.png" />
                        <span class="q-pl-lg">Instagram</span>
                    </div>
                </a>
            </q-item>
            <q-item clickable>
                <a href="#" class="row items-center">
                    <div class="row items-center q-px-md">
                        <img src="@/assets/images/icon_youtube.png" />
                        <span class="q-pl-lg">Youtube</span>
                    </div>
                </a>
            </q-item>
          </q-list>
        </q-menu>
        </q-icon>
    </div>
    <div id="lan">
        <a href="#">
            <q-icon name="language" size="md" color="grey-5"></q-icon>
        </a>
    </div>
</header>
</template>

<script>
export default {

}
</script>

<style scoped>
#header {
    background-color: rgba(17, 18, 32, 0.9);
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    z-index: 101;
}
/* logo */
#header h1 {
    left: 2rem;
    position: absolute;
    top: 42%;
    transform: translateY(-50%);
}
#header h1 img {
    width: 200px;
}
/* nav */
#header > nav {
    display: block !important;
    padding: 1rem 0;
}
#header > nav > ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
}
#header > nav > ul > li {
    position: relative;
}
#header > nav > ul > li > a {
    color: #fff;
    font-size: 1.2rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: block;
    height: 5rem;
    line-height: 5rem;
    transition: all .3s ease-in-out;
    text-decoration: none;
    padding: 0px 1rem;
}
#header > nav > ul > li:hover > a {
    color: #1fc7d4;
}
/* link */
#header #link {
    right: 6rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
}
#header #link i {
    color: white;
}
#header #link i #downBtn {
    top: -19px;
}

/* drop down */
.q-menu {
    width: 150px !important;
    max-width: 200px !important;
}
.q-list {
    border: 2px solid #136875;
    background-color: rgba(17, 18, 32, 0.9);
}
.q-item img {
    width: 25px;
}
.q-itme a {
    color: white;
    justify-content: center;
    align-items: center;
}
.q-item span {
    color: white;
    font-weight: 500;
    font-size: 17px;
}

/* lan */
#header #lan {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    right: 1rem;
}

#header #lan::after {
    content: "";
    position: absolute;
    left: -12px;
    top: 50%;
    transform: translateY(-50%);
    border-left: 2px solid rgba(255, 255, 255, .2);
    height: 1.2rem;

}
</style>