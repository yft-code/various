<!-- <template>
  <div class="about">
    <drag-weektime
        v-model="mult_timeRange"
        :data="weektimeData"
        @on-clear="clearWeektime">
      </drag-weektime>
</div>
</template>
<script>
import moment from 'moment'
import weektimeData from '../../components/dragWeektime/weekTime'
import DragWeektime from '../../components/dragWeektime/'

function splicing (list) {
  let same
  let i = -1
  let len = list.length
  let arr = []

  if (!len) return
  while (++i < len) {
    const item = list[i]
    if (item.check) {
      if (item.check !== Boolean(same)) {
        arr.push(...['、', item.begin, '~', item.end])
      } else if (arr.length) {
        arr.pop()
        arr.push(item.end)
      }
    }
    same = Boolean(item.check)
  }
  arr.shift()
  return arr.join('')
}

export default {
  name: 'About',
  components: { DragWeektime }, //, DatePicker
  computed: {
    mult_timeRange () {
      return this.weektimeData.map(item => {
        return {
          id: item.row,
          week: item.value,
          value: splicing(item.child)
        }
      })
    }
  },
  data () {
    return {
      weektimeData: weektimeData
    }
  },
  methods: {
    moment,
    // 清空时间段
    clearWeektime () {
      this.weektimeData.forEach(item => {
        item.child.forEach(t => {
          this.$set(t, 'check', false)
        })
      })
    }
  }
}
</script> -->
