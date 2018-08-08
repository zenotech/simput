import { mapGetters } from 'vuex';
import { Getters } from 'simput/src/stores/types';

// ----------------------------------------------------------------------------

export default {
  name: 'WorkflowMenu',
  computed: mapGetters({
    dataModel: Getters.DATAMANAGER,
  }),
  methods: {
    viewSize(viewId) {
      return this.dataModel.model.views[viewId].size;
    },
  },
};
