<template>
  <div @click="toggleSelected" class="item-container">
    <div class="avatar-container">
      <AvatarImage :person="person" class="avatar" />
    </div>
    <div class="info-container">
      <h5 class="heading">{{ person.firstName }} {{ person.lastInitial}}. </h5>
      <div class="text-block-3">
        <span class="caption" v-if="person.children.length">
          Parent to
          <span v-for="(child, index) in person.children">
            <span class="child">{{ child.firstName }}
              <span class="black-50">({{ child.age }})
              </span>
            </span>
            <span v-if="(index < person.children.length - 1)">,
            </span>
          </span>
        </span>
      </div>
    </div>
    <div class="checkbox-container">
      <span class="w-inline-block">
        <img
          :src="require(`../../assets/${imageNameForCheckmark}`)"
          class="checkbox" />
      </span>
    </div>
  </div>
</template>

<script>
import AvatarImage from '@/components/base/AvatarImage.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'InviteUserListItem',
  data () {
    return {
      isSelected: false,
      inviteComplete: false
    }
  },
  props: ['person', 'eventId', 'isAllowedToTurnOn'],
  components: { AvatarImage },
  methods: {
    toggleSelected: function () {
      if (this.isSelected) {
        this.isSelected = false
      } else {
        if (this.isAllowedToTurnOn) {
          this.isSelected = true
        } else {
          this.$emit('disallowedSelection')
        }
      }
      this.$emit('stateSet', this.person.id, this.isSelected)
    }
  },
  computed: {
    imageNameForCheckmark: function () {
      if (this.isSelected) {
        return 'check-circle-24.svg'
      } else {
        return 'check-circle-24-gray.svg'
      }
    },
    ...mapGetters(['currentUser'])
  }
}
</script>

<style>

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.item-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  background-color: #fff;
}

.checkbox {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  min-width: 56px;
  padding: 16px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 50%;
  background-color: transparent;
  color: #1f88e9;
}

.checkbox:active {
  background-color: rgba(0, 0, 0, .1);
}

.checkbox-container {
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center;
}

.avatar-container {
  min-width: 40px;
}

.info-container {
  width: 100%;
  padding-right: 16px;
  padding-left: 16px;
}

</style>
