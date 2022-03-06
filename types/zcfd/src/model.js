module.exports = {
  order: ['run', 'timemarcher', 'analyses'],
  views: {
    timemarcher: {
      size: -1,
      attributes: ['timemarch'],
      hooks: [
        {
          type: 'copyParameterToViewName',
          attribute: 'timemarch.name',
        },
        {
          type: 'timemarchsToExternal',
        },
      ],
    },
    analyses: {
      size: -1,
      attributes: ['analysis'],
      hooks: [
        {
          type: 'copyParameterToViewName',
          attribute: 'analysis.name',
        },
      ],
    },
    run: {
      attributes: ['runParams'],
      hooks: [
        {
          type: 'copyToExternal',
          src: 'data.run.0.runParams.gridsize.value.0',
          dst: 'viz.gridsize',
        },
        {
          type: 'copyToExternal',
          src: 'data.run.0.runParams.dt.value.0',
          dst: 'viz.timeStep',
        },
        {
          type: 'copyToExternal',
          src: 'data.run.0.runParams.endT.value.0',
          dst: 'viz.endTime',
        },
      ],
    },
  },
  definitions: {
    timemarch: {
      parameters: [
        {
          id: 'jobname',
          label: 'Job Name',
          type: 'string',
          size: 1,
        },
        {
          id: 'type',
          type: 'enum',
          size: 1,
          default: 'global',
          domain: {
            Global: 'global',
            Duel: 'dueltime',
          },
        },
        {
          id: 'totaltime',
          type: 'double',
          size: 1,
          default: [1],
        },
        {
          id: 'timestep',
          type: 'double',
          size: 1,
          default: [1],
        },
        {
          id: 'accuracy',
          type: 'enum',
          size: 1,
          show: "type[0] === 'dueltime'",
          default: 'first',
          domain: {
            First: 'first',
            Second: 'second',
          }
        },
        {
          id: 'psuedocycles',
          type: 'int',
          size: 1,
          show: "type[0] === 'dueltime'",
        },
      ],
    },
    analysis: {
      parameters: [
        {
          id: 'name',
          label: 'Name',
          type: 'string',
          size: 1,
        },
        {
          id: 'type',
          type: 'enum',
          size: 1,
          default: 'histogram',
          domain: {
            Histogram: 'histogram',
            Autocorrelation: 'autocorrelation',
          },
        },
        ["histogram", "autocorrelation"],
      ],
      children: {
        histogram: "analysis.type[0] === 'histogram'",
        autocorrelation: "analysis.type[0] === 'autocorrelation'",
      },
    },
    histogram: {
       parameters: [
          {
              id: 'mesh',
              type: 'enum',
              size: 1,
              default: 'mesh',
              domain: {
                Mesh: 'mesh',
                'Unstructured mesh': 'ucdmesh',
                'Particle velocity magnitude': 'particles',
              },
          },
          {
            id: 'bins',
            type: 'int',
            size: 1,
            default: [10],
          },
       ],
    },
    autocorrelation: {
       parameters: [
          {
              id: 'mesh',
              type: 'enum',
              size: 1,
              default: 'mesh',
              domain: {
                // currently only works on one type.
                Mesh: 'mesh',
              },
          },
          {
            id: 'window',
            type: 'double',
            size: 1,
            default: [10],
          },
          {
            id: 'kmax',
            type: 'double',
            size: 1,
            default: [3],
          },
       ],
    },
    runParams: {
      parameters: [
        {
          id: 'nodes',
          type: 'int',
          size: 1,
          default: [1],
        },
        {
          id: 'gridsize',
          type: 'int',
          size: 1,
          default: [64],
        },
        {
          id: 'dt',
          type: 'double',
          size: 1,
          default: [0.1],
        },
        {
          id: 'endT',
          type: 'double',
          size: 1,
          default: [10],
        },
      ],
    },
    timemarchView: {
      parameters: [
        {
          id: 'viz',
          propType: 'ViewerWidget',
          size: 1,
          default: {
            text: '',
          },
          domain: {
            dynamic: true,
            external: 'viz',
          },
          label: 'Gaussians',
        },
      ],
    },
  },
};
