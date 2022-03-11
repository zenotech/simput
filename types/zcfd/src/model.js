module.exports = {
  order: ['timemarcher', 'solverscheme','cfldata'],
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
          type: 'timemarchToExternal',
        },
      ],
    },
    solverscheme: {
      size: -1,
      attributes: ['solver'],
      hooks: [
        {
          type: 'copyParameterToViewName',
          attribute: 'solver.name',
        },
        {
          type: 'solverToExternal',
        },
      ],
    },
    cfldata: {
      size: -1,
      attributes: ['cfl'],
      hooks: [
        {
          type: 'copyParameterToViewName',
          attribute: 'cfl.name',
        },
        {
          type: 'cflToExternal',
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
          default: [1],
          show: "type[0] === 'dueltime'",
        },
      ],
    },
    solver: {
      parameters: [
        {
          id: 'solvername',
          label: 'Solver Name',
          type: 'string',
          size: 1,
        },
        {
          id: 'type',
          type: 'enum',
          size: 1,
          default: 'euler',
          domain: {
            Euler: 'euler',
            RK: 'rk',
            LU_SGS: 'lu_sgs',
          },
        },
        {
          id: 'rk_stages',
          type: 'enum',
          size: 1,
          show: "type[0] === 'rk'",
          default: 'one',
          domain: {
            One: 'one',
            Four: 'four',
            Five: 'five',
            RK_Third: 'rk_third',
          }
        },
        {
          id: 'time_scheme',
          type: 'enum',
          size: 1,
          show: "type[0] === 'rk'",
          default: 'local',
          domain: {
            Local: 'local',
            Dual: 'dual',
          }
        },   
        {
          id: 'sgs_cycles',
          type: 'int',
          size: 1,
          show: "type[0] === 'lu_sgs'",          
          default: [8],
        },
        {
          id: 'jacobian_update_freq',
          type: 'int',
          size: 1,
          show: "type[0] === 'lu_sgs'",          
          default: [1],
        },
        {
          id: 'backward_sweep',
          type: 'enum',
          size: 1,
          show: "type[0] === 'lu_sgs'",
          default: 'true',
          domain: {
            True: 'true',
            False: 'false',
          }
        }, 
        {
          id: 'relaxation',
          type: 'enum',
          size: 1,
          show: "type[0] === 'lu_sgs'",
          default: 'true',
          domain: {
            True: 'true',
            False: 'false',
          }
        },
        {
          id: 'jacobian_epsilon',
          type: 'double',
          size: 1,
          show: "type[0] === 'lu_sgs'",          
          default: [1e-8],
        },        
        {
          id: 'rasanov',
          type: 'enum',
          size: 1,
          show: "type[0] === 'lu_sgs'",
          default: 'true',
          domain: {
            True: 'true',
            False: 'false',
          }
        },
        {
          id: 'finite_difference',
          type: 'enum',
          size: 1,
          show: "type[0] === 'lu_sgs'",
          default: 'false',
          domain: {
            True: 'true',
            False: 'false',
          }
        },                                             
      ],
    },
    cfl: {
      parameters: [
        {
          id: 'cflname',
          label: 'CFL Settings Name',
          type: 'string',
          size: 1,
        },
        {
          id: 'maxcfl_all',
          type: 'double',
          size: 1,         
          default: [2.5],
        },
        {
          id: 'maxcfl_transport',
          type: 'double',
          size: 1,         
          default: [1.5],
        },
        {
          id: 'maxcfl_coarse',
          type: 'double',
          size: 1,         
          default: [2.0],
        },  
        {
          id: 'multipolycfl_lower',
          type: 'double',
          size: 1,         
          default: [2.0],
        },
        {
          id: 'multipolycfl_upper',
          type: 'double',
          size: 1,         
          default: [2.0],
        },
        {
          id: 'ramp_factor',
          type: 'enum',
          size: 1,
          default: 'no',
          domain: {
            Yes: 'yes',
            No: 'no',
          }
        }, 
        {
          id: 'growth',
          type: 'double',
          size: 1,
          show: "type[0] === 'yes'",                   
          default: [1.05],
        },
        {
          id: 'initial',
          type: 'double',
          size: 1,
          show: "type[0] === 'yes'",                   
          default: [0.1],
        },                                                    
      ],
    },         
  },
};
