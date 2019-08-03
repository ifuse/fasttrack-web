<template>
  <div id="pageDashboard">
        <v-flex lg6 sm12 xs12>
          <v-widget title="Activities" content-bg="white">
            <div slot="widget-content">
              <ol class="timeline timeline-activity timeline-point-sm timeline-content-right">
                <li class="timeline-block" v-for="(item, index) in activity" :key="index">
                  <div class="timeline-point">
                    <v-circle dot large :color="item.color"></v-circle>
                  </div>
                  <div class="timeline-content">
                    <time datetime="2018" class="subheading">{{ item.timeString }}</time>
                    <div class="py-2 text--secondary" v-html="item.text"></div>
                  </div>
                </li>
              </ol>
            </div>
          </v-widget>
        </v-flex>
        <v-flex lg7 sm12 xs12>
          <plain-table></plain-table>
        </v-flex>
        <v-flex lg5 sm12 xs12>
          <plain-table-order></plain-table-order>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import API from "@/api"
import PlainTable from "@/components/widgets/list/PlainTable"
export default {
  components: {
    PlainTable,
  }
}
</script>
