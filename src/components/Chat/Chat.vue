<script setup>
import Input from "../Input/Input.vue";
import { useUsersStore } from "../../stores/users.js";
import Contact from "../Contact/Contact.vue";
import { useLogUser } from "../../stores/logUser";

const store = useUsersStore();
const logUser = useLogUser();

const withoutLogUser = store.users.filter((item) => {
  return item.id !== logUser.logUser.id;
});

console.log(withoutLogUser);
console.log(store.users, logUser.logUser);
</script>
<template>
  <div class="left_chat">
    <div class="user-profile">
      <div className="profile-info">
        <div className="profile-photo">
          <div className="conected"></div>
        </div>
        <div className="profile-text">
          <p className="good_morning">{{ logUser.logUser.name }}</p>
          <p className="user_name">Last seen recently</p>
        </div>
      </div>
      <div className="profile-icons">
        <div>
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.688 7.988H7.84V12.956H5.296V7.988H0.448V5.684H5.296V0.715999H7.84V5.684H12.688V7.988Z"
              fill="#ADADAD"
            />
          </svg>
        </div>
        <div>
          <svg
            width="12"
            height="16"
            viewBox="0 0 12 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.99999 15.5C6.82499 15.5 7.49999 14.825 7.49999 14H4.49999C4.49999 14.825 5.16749 15.5 5.99999 15.5ZM10.5 11V7.25C10.5 4.9475 9.26999 3.02 7.12499 2.51V2C7.12499 1.3775 6.62249 0.875 5.99999 0.875C5.37749 0.875 4.87499 1.3775 4.87499 2V2.51C2.72249 3.02 1.49999 4.94 1.49999 7.25V11L0.532493 11.9675C0.0599928 12.44 0.389993 13.25 1.05749 13.25H10.935C11.6025 13.25 11.94 12.44 11.4675 11.9675L10.5 11Z"
              fill="#ADADAD"
            />
          </svg>
        </div>
        <div>
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.55059 14.6012C11.1684 14.6012 14.1012 11.6684 14.1012 8.05059C14.1012 4.4328 11.1684 1.5 7.55059 1.5C3.9328 1.5 1 4.4328 1 8.05059C1 11.6684 3.9328 14.6012 7.55059 14.6012Z"
              stroke="#ADADAD"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.6254 13.1247L16.7427 17.242"
              stroke="#ADADAD"
              stroke-width="2"
              strokeinecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="contacts_container">
      <Contact
        v-for="user in store.users"
        :key="user.id"
        :user="user"
      ></Contact>
    </div>
  </div>
  <!-- Chats -->
  <div v-if="store.toggle" class="chats_container">
    <div className="chat_contact_info">
      <div className="profile-info">
        <div className="profile-photo">
          <div className="conected"></div>
        </div>
        <div className="profile-text">
          <p className="good_morning">{{ store.currentUser.name }}</p>
          <p className="user_name">Last seen recently</p>
        </div>
      </div>
      <div className="profile-icons">
        <div>
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.55059 14.6012C11.1684 14.6012 14.1012 11.6684 14.1012 8.05059C14.1012 4.4328 11.1684 1.5 7.55059 1.5C3.9328 1.5 1 4.4328 1 8.05059C1 11.6684 3.9328 14.6012 7.55059 14.6012Z"
              stroke="#ADADAD"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.6254 13.1247L16.7427 17.242"
              stroke="#ADADAD"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.50002 4H10V5.5C10 5.9125 10.3375 6.25 10.75 6.25C11.1625 6.25 11.5 5.9125 11.5 5.5V4H13C13.4125 4 13.75 3.6625 13.75 3.25C13.75 2.8375 13.4125 2.5 13 2.5H11.5V1C11.5 0.5875 11.1625 0.25 10.75 0.25C10.3375 0.25 10 0.5875 10 1V2.5H8.50002C8.08752 2.5 7.75002 2.8375 7.75002 3.25C7.75002 3.6625 8.08752 4 8.50002 4ZM12.4075 9.4525L10.5025 9.235C10.045 9.1825 9.59502 9.34 9.27252 9.6625L7.89252 11.0425C5.77002 9.9625 4.03002 8.23 2.95002 6.1L4.33752 4.7125C4.66002 4.39 4.81752 3.9325 4.76502 3.4825L4.54752 1.5925C4.46502 0.835 3.82002 0.2575 3.06252 0.2575H1.76502C0.917523 0.2575 0.212523 0.9625 0.265023 1.81C0.662523 8.215 5.78502 13.33 12.1825 13.7275C13.03 13.78 13.735 13.075 13.735 12.2275V10.93C13.7425 10.18 13.165 9.535 12.4075 9.4525Z"
              fill="#ADADAD"
            />
          </svg>
        </div>
        <div>
          <svg
            width="4"
            height="18"
            viewBox="0 0 4 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 9C0 9.39556 0.117298 9.78224 0.337061 10.1111C0.556824 10.44 0.869181 10.6964 1.23463 10.8478C1.60009 10.9991 2.00222 11.0387 2.39018 10.9616C2.77814 10.8844 3.13451 10.6939 3.41421 10.4142C3.69392 10.1345 3.8844 9.77814 3.96157 9.39018C4.03874 9.00222 3.99913 8.60008 3.84776 8.23463C3.69638 7.86918 3.44004 7.55682 3.11114 7.33706C2.78224 7.1173 2.39556 7 2 7C1.46957 7 0.96086 7.21071 0.585787 7.58579C0.210714 7.96086 0 8.46957 0 9ZM0 16C0 16.3956 0.117298 16.7822 0.337061 17.1111C0.556824 17.44 0.869181 17.6964 1.23463 17.8478C1.60009 17.9991 2.00222 18.0387 2.39018 17.9616C2.77814 17.8844 3.13451 17.6939 3.41421 17.4142C3.69392 17.1345 3.8844 16.7781 3.96157 16.3902C4.03874 16.0022 3.99913 15.6001 3.84776 15.2346C3.69638 14.8692 3.44004 14.5568 3.11114 14.3371C2.78224 14.1173 2.39556 14 2 14C1.46957 14 0.96086 14.2107 0.585787 14.5858C0.210714 14.9609 0 15.4696 0 16ZM0 2C0 2.39556 0.117298 2.78224 0.337061 3.11114C0.556824 3.44004 0.869181 3.69638 1.23463 3.84776C1.60009 3.99913 2.00222 4.03874 2.39018 3.96157C2.77814 3.8844 3.13451 3.69392 3.41421 3.41421C3.69392 3.13451 3.8844 2.77814 3.96157 2.39018C4.03874 2.00222 3.99913 1.60008 3.84776 1.23463C3.69638 0.869181 3.44004 0.556824 3.11114 0.337061C2.78224 0.117298 2.39556 0 2 0C1.46957 0 0.96086 0.210714 0.585787 0.585787C0.210714 0.960859 0 1.46957 0 2Z"
              fill="#121212"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="chats_container_main"></div>

    <Input></Input>
  </div>
</template>
<style>
.left_chat {
  height: 100vh;
  width: 614px;
  border-right: 1px solid #c4c4c4;
  position: relative;
}

.user-profile {
  height: 120px;
  width: 100%;
  border-bottom: 1px solid #c4c4c4;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.profile-icons {
  margin-inline-end: 48px;
  display: flex;
  align-items: center;
  column-gap: 16px;
}

.profile-icons div {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-info {
  padding-inline-start: 26px;
  display: flex;
  align-items: center;
}

.profile-photo {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #c4c4c4;
  margin-inline-end: 16px;
  position: relative;
}

.conected {
  width: 12px;
  height: 12px;
  background-color: #47dc44;
  border-radius: 100%;
  position: absolute;
  inset-inline-end: 0px;
  inset-block-end: 0px;
}

.profile-text {
  font-size: 1.6rem;
  font-weight: 500;
  color: #41475e;
}

.user_name {
  font-size: 1.4rem;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  opacity: 0.5;
}

.chats_container {
  width: 826px;
  height: 100vh;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
}

.chat_contact_info {
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
}

.chats_container_main {
  display: flex;
  flex-direction: column;
  height: 61%;
  padding: 30px;
  overflow-y: scroll;
}

.contacts_container {
  padding-inline-end: 32px;
  overflow-y: scroll;
  height: 80%;
}
</style>
