<template>
    <div class="profile" v-if="getUserInfo">
        <div class="profile__img-container">
            <img class="img-container__image" :src="getUserInfo.image || '/app/public/images/default-profile.png'" alt="" />

            <input @change="this.onProfileImgChange($event)" class="img-container__input" type="file" accept=".jpg, .jpeg, .png" />
            <div class="img-container__icon" src="" alt=""></div>
        </div>
        <div class="profile__role-container" @click="this.sendToAdminpanel()" v-if="this.getUserInfo.admin">
            <h3>Admin</h3>
            <img class="role-container__badge" src="/app/public/images/admin.png" alt="" />
        </div>
        <div class="profile__info">
            <div class="info__username">
                <p v-if="!this.changeUsername" class="username__name">
                    {{ getUserInfo.username }}
                </p>
                <input v-if="this.changeUsername" v-model="this.username" class="name__input" type="text" />
                <button
                    @click="
            usernameChange();
            updateSanityUsername(this.username);
          "
                    class="username__button"
                ></button>
            </div>
            <p class="info__email">{{ getUserInfo.email }}</p>
        </div>

        <div class="profile__resources">
            <div class="resources__credits">
                <p class="credits__text">Saldo</p>
                <div class="credits__display">
                    <img class="display__icon" src="/app/public/images/gambling-chips.png" alt="" />
                    <p class="display__amount">
                        {{ getUserInfo.credits.toLocaleString("no-NO") }}
                    </p>
                </div>
            </div>

            <div class="resources__level">
                <p class="level__text">Level</p>
                <div class="level__display">
                    <img class="display__icon" src="/app/public/images/level-up.png" alt="" />
                    <p class="display__amount">0</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import sanity from "../sanity.js";
export default {
  data() {
    return {
      changeUsername: false,
      username: null,
    };
  },

  created() {},

  mounted() {
    this.checkIfUserLoggedIn();
  },

  computed: {
    getUserInfo() {
      return this.$store.getters.getAllUserData;
    },

    getUserLoggedIn() {
      return this.$store.getters.getUserLoggedIn;
    },
  },

  methods: {
    onProfileImgChange(event) {
      console.log(event.target.files);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        console.log(uploaded_image);
        document.querySelector(
          ".img-container__image"
        ).src = `${uploaded_image}`; // her
        this.updateSanityUserImage(uploaded_image);
      });

      reader.readAsDataURL(event.target.files[0]);
    },

    async updateSanityUserImage(image) {
      const currentUser = this.getUserInfo;
      try {
        await sanity
          .patch(currentUser._id)
          .set({ image: image })
          .commit()
          .then((res) => {
            console.log("Image updated", res);
          });
      } catch (err) {
        console.log(err, "ERROR!!!");
      }
    },

    async updateSanityUsername(profileUsername) {
      this.username = this.getUserInfo.username;
      if (
        !this.changeUsername &&
        profileUsername !== this.username &&
        profileUsername.length > 3
      ) {
        console.log("Changing Username");
        const currentUser = this.getUserInfo;
        try {
          await sanity
            .patch(currentUser._id)
            .set({ username: profileUsername })
            .commit();
        } catch (err) {
          console.log(err, "ERROR!!!");
        }
      }
    },

    async checkIfUserLoggedIn() {
      let userLoggedIn = await this.getUserLoggedIn;
      console.log(userLoggedIn, "CHECKIFUSER");
      if (userLoggedIn) {
      } else {
        await this.$router.push({ name: "home" });
      }
    },

    usernameChange() {
      this.changeUsername = !this.changeUsername;
    },

    sendToAdminpanel() {
      this.$router.push({ name: "adminpanel" });
    },
  },
};
</script>

<style scoped>
.profile {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;
    justify-self: center;
    margin: 0 auto;
}

.profile__img-container {
    width: 14rem;
    height: 14rem;
}

.img-container__image {
    height: inherit;
    width: inherit;
    position: absolute;
    border-radius: 50%;

    border: 0.4rem solid #ffc000;
    overflow: hidden;
    z-index: 1;
    aspect-ratio: 1 / 1;
    object-fit: cover;
}

.img-container__input {
    position: absolute;
    width: inherit;
    height: inherit;
    background: red;
    z-index: 3;
    opacity: 0;
    border-radius: 50%;
}

.img-container__input:hover ~ .img-container__icon {
    opacity: 0.7;
}

.img-container__icon {
    position: absolute;
    width: inherit;
    height: inherit;
    z-index: 2;
    border-radius: 50%;
    background-image: url("/app/public/images/upload.png");
    background-size: 4rem;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #000000;
    opacity: 0;
    padding: 1rem;
}

.profile__role-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 9rem;
    height: 4rem;
    border-radius: 0.4rem;
    /* color: var(--foreground); */
    font-weight: lighter;
    font-size: 1.2rem;
    padding: 1rem;
}

.profile__role-container:hover {
    cursor: pointer;
    opacity: 0.5;
}

.role-container__badge {
    aspect-ratio: 1 / 1;
    height: 100%;
    width: auto;
}

.profile__info {
    display: flex;
    flex-direction: column;
    font-family: Jubel, Arial, Helvetica, sans-serif;
    text-align: center;
    align-items: center;
    padding: 1rem;
}

.info__username {
    display: flex;
    align-items: center;
    width: 65%;
}

.username__name {
    width: 100%;
    max-width: 25rem;
    font-size: 3rem;
    font-weight: 600;
    padding-right: 1rem;
}

.name__input {
    width: 90%;
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    font-family: Jubel, Arial, Helvetica, sans-serif;
}

.username__button {
    width: 2.2rem;
    height: 2.2rem;
    min-height: 2.2rem;
    min-width: 2.2rem;
    max-width: 2.2rem;
    max-height: 2.2rem;
    background-image: url("/app/public/images/edit-text.png");
    background-size: 100% 100%;
    background-color: transparent;
    border: 0;
    opacity: 0.5;
}

.username__button:hover {
    opacity: 1;
}

.info__email {
    font-size: 2rem;
    font-weight: 500;
    align-self: center;
}

.profile__resources {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.resources__credits,
.resources__level {
    width: 50%;
    padding: 1rem;
}

.credits__display,
.level__display {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 10rem;
    border-radius: 1rem;
    padding: 2rem;
    -webkit-box-shadow: inset 0 0 10px 3px #000000;
    -moz-box-shadow: inset 0 0 10px 3px #000000;
    box-shadow: inset 0 0 10px 3px #000000;

    background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='1080' preserveAspectRatio='none' viewBox='0 0 1920 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1263%26quot%3b)' fill='none'%3e%3crect width='1920' height='1080' x='0' y='0' fill='rgba(38%2c 20%2c 64%2c 1)'%3e%3c/rect%3e%3cuse xlink:href='%23SvgjsSymbol1270' x='0' y='0'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsSymbol1270' x='0' y='720'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsSymbol1270' x='720' y='0'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsSymbol1270' x='720' y='720'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsSymbol1270' x='1440' y='0'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsSymbol1270' x='1440' y='720'%3e%3c/use%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1263'%3e%3crect width='1920' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpath d='M-1 0 a1 1 0 1 0 2 0 a1 1 0 1 0 -2 0z' id='SvgjsPath1268'%3e%3c/path%3e%3cpath d='M-3 0 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0z' id='SvgjsPath1269'%3e%3c/path%3e%3cpath d='M-5 0 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0z' id='SvgjsPath1266'%3e%3c/path%3e%3cpath d='M2 -2 L-2 2z' id='SvgjsPath1264'%3e%3c/path%3e%3cpath d='M6 -6 L-6 6z' id='SvgjsPath1265'%3e%3c/path%3e%3cpath d='M30 -30 L-30 30z' id='SvgjsPath1267'%3e%3c/path%3e%3c/defs%3e%3csymbol id='SvgjsSymbol1270'%3e%3cuse xlink:href='%23SvgjsPath1264' x='30' y='30' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='30' y='90' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='30' y='150' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='30' y='210' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='30' y='270' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='30' y='330' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='30' y='390' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1267' x='30' y='450' stroke='rgba(255%2c 192%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='30' y='510' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='30' y='570' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='30' y='630' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1267' x='30' y='690' stroke='rgba(255%2c 192%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='90' y='30' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='90' y='90' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='90' y='150' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='90' y='210' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='90' y='270' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='90' y='330' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='90' y='390' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='90' y='450' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='90' y='510' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='90' y='570' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='90' y='630' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='90' y='690' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='150' y='30' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='150' y='90' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='150' y='150' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='150' y='210' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='150' y='270' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='150' y='330' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='150' y='390' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='150' y='450' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='150' y='510' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='150' y='570' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1267' x='150' y='630' stroke='rgba(255%2c 192%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='150' y='690' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='210' y='30' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='210' y='90' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='210' y='150' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1267' x='210' y='210' stroke='rgba(255%2c 192%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='210' y='270' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='210' y='330' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='210' y='390' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='210' y='450' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='210' y='510' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='210' y='570' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='210' y='630' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='210' y='690' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='270' y='30' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='270' y='90' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='270' y='150' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='270' y='210' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='270' y='270' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='270' y='330' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='270' y='390' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='270' y='450' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='270' y='510' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='270' y='570' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='270' y='630' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='270' y='690' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='330' y='30' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='330' y='90' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='330' y='150' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1267' x='330' y='210' stroke='rgba(255%2c 192%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='330' y='270' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='330' y='330' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='330' y='390' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='330' y='450' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1267' x='330' y='510' stroke='rgba(255%2c 192%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='330' y='570' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='330' y='630' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='330' y='690' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='390' y='30' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='390' y='90' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1267' x='390' y='150' stroke='rgba(255%2c 192%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='390' y='210' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='390' y='270' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='390' y='330' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='390' y='390' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='390' y='450' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='390' y='510' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='390' y='570' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='390' y='630' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='390' y='690' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='450' y='30' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='450' y='90' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='450' y='150' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='450' y='210' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='450' y='270' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='450' y='330' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1267' x='450' y='390' stroke='rgba(255%2c 192%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='450' y='450' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='450' y='510' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='450' y='570' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='450' y='630' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='450' y='690' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='510' y='30' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='510' y='90' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1267' x='510' y='150' stroke='rgba(255%2c 192%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='510' y='210' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='510' y='270' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='510' y='330' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='510' y='390' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='510' y='450' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='510' y='510' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='510' y='570' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='510' y='630' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='510' y='690' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='570' y='30' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='570' y='90' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='570' y='150' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='570' y='210' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='570' y='270' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='570' y='330' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1269' x='570' y='390' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='570' y='450' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='570' y='510' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='570' y='570' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1267' x='570' y='630' stroke='rgba(255%2c 192%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='570' y='690' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1267' x='630' y='30' stroke='rgba(255%2c 192%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='630' y='90' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='630' y='150' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='630' y='210' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='630' y='270' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='630' y='330' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='630' y='390' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='630' y='450' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='630' y='510' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='630' y='570' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='630' y='630' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='630' y='690' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='690' y='30' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='690' y='90' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='690' y='150' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='690' y='210' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1267' x='690' y='270' stroke='rgba(255%2c 192%2c 0%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='690' y='330' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='690' y='390' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1265' x='690' y='450' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='690' y='510' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1266' x='690' y='570' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1268' x='690' y='630' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1264' x='690' y='690' stroke='rgba(255%2c 192%2c 0%2c 1)'%3e%3c/use%3e%3c/symbol%3e%3c/svg%3e");
}

.credits__text,
.level__text {
    font-size: 1.5rem;
    font-weight: 500;
}

.display__icon {
    height: 80%;
    width: auto;
}

.display__amount {
    font-size: 2rem;
    font-weight: 600;
    color: #96d94e;
    text-shadow: 0 3px #00a42e, 0 3px #00a42e, 0 3px;
}

</style>