module.exports = {
  order: ['time_marching', 'scheme','cfldata','equations',
  'materialspec','initialconditions','boundaryconditions','fluidzones','output'],
  views: {
    time_marching: {
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
    scheme: {
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
          attribute: 'cfl.cflname',
        },
        {
          type: 'cflToExternal',
        },
      ],
    },
    equations: {
      size: -1,
      attributes: ['equation'],
      hooks: [
        {
          type: 'copyParameterToViewName',
          attribute: 'equation.equation_name',
        },
        {
          type: 'equationToExternal',
        },
      ],
    },
    materialspec: {
      size: -1,
      attributes: ['materials'],
      hooks: [
        {
          type: 'copyParameterToViewName',
          attribute: 'materials.material',
        },
        {
          type: 'materialsToExternal',
        },
      ],
    },
    initialconditions: {
      size: -1,
      attributes: ['ics'],
      hooks: [
        {
          type: 'copyParameterToViewName',
          attribute: 'ics.ic_name',
        },
        {
          type: 'icsToExternal',
        },
      ],
    },
    boundaryconditions: {
      size: -1,
      attributes: ['bcs'],
      hooks: [
        {
          type: 'copyParameterToViewName',
          attribute: 'bcs.bc_name',
        },
        {
          type: 'bcsToExternal',
        },
      ],
    },
    fluidzones: {
      size: -1,
      attributes: ['fzones'],
      hooks: [
        {
          type: 'copyParameterToViewName',
          attribute: 'fzones.fz',
        },
        {
          type: 'fzonesToExternal',
        },
      ],
    },
    output: {
      size: -1,
      attributes: ['out'],
      hooks: [
        {
          type: 'copyParameterToViewName',
          attribute: 'out.write_output',
        },
        {
          type: 'outToExternal',
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
            Dual: 'Dualtime',
          },
        },
        {
          id: 'total_time',
          type: 'double',
          size: 1,
          default: [1.0],
        },
        {
          id: 'time_step',
          type: 'double',
          size: 1,
          default: [1.0],
        },
        {
          id: 'order',
          type: 'enum',
          size: 1,
          show: "type[0] === 'Dualtime'",
          default: 'second',
          domain: {
            First: 'first',
            Second: 'second',
          }
        },
        {
          id: 'start',
          type: 'int',
          size: 1,
          default: [3000],
          show: "type[0] === 'Dualtime'",
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
          id: 'name',
          type: 'enum',
          size: 1,
          default: 'euler',
          domain: {
            Euler: 'euler',
            Runge_Kutta: 'runge_kutta',
            LU_SGS: 'lu_sgs',
          },
        },
        {
          id: 'stage',
          type: 'enum',
          size: 1,
          show: "name[0] === 'runge_kutta'",
          default: 'one',
          domain: {
            One: '1',
            Four: '4',
            Five: '5',
            RK_Third: 'rk_third_order_tvd',
          }
        },
        {
          id: 'kind',
          type: 'enum',
          size: 1,
          show: "name[0] === 'runge_kutta'",
          default: 'local',
          domain: {
            Local: 'local_timestepping',
            Dual: 'global_timestepping',
          }
        },   
        {
          id: 'Number_Of_SGS_Cycles',
          type: 'int',
          size: 1,
          show: "name[0] === 'lu_sgs'",          
          default: [8],
        },
        {
          id: 'Jacobian_Update_Frequency',
          type: 'int',
          size: 1,
          show: "name[0] === 'lu_sgs'",          
          default: [1],
        },
        {
          id: 'Include_Backward_Sweep',
          type: 'enum',
          size: 1,
          show: "name[0] === 'lu_sgs'",
          default: 'True',
          domain: {
            True: 'True',
            False: 'False',
          }
        }, 
        {
          id: 'Include_Relaxation',
          type: 'enum',
          size: 1,
          show: "name[0] === 'lu_sgs'",
          default: 'True',
          domain: {
            True: 'True',
            False: 'False',
          }
        },
        {
          id: 'Jacobian_Epsilon',
          type: 'double',
          size: 1,
          show: "name[0] === 'lu_sgs'",          
          default: [1e-8],
        },        
        {
          id: 'Use_Rusanov_Flux_For_Jacobian',
          type: 'enum',
          size: 1,
          show: "name[0] === 'lu_sgs'",
          default: 'True',
          domain: {
            True: 'True',
            False: 'False',
          }
        },
        {
          id: 'Finite_Difference_Jacobian',
          type: 'enum',
          size: 1,
          show: "name[0] === 'lu_sgs'",
          default: 'False',
          domain: {
            True: 'True',
            False: 'False',
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
          id: 'cfl',
          type: 'double',
          size: 1,         
          default: [2.5],
        },
        {
          id: 'cfl_transport',
          type: 'double',
          size: 1,         
          default: [1.5],
        },
        {
          id: 'cfl_coarse',
          type: 'double',
          size: 1,         
          default: [2.0],
        },  
        {
          id: 'multipolycfl',
          type: 'double',
          size: 2,         
          default: [2.0,2.0],
        },
        {
          id: 'cfl_ramp_factor',
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
          show: "cfl_ramp_factor[0] === 'yes'",                   
          default: [1.05],
        },
        {
          id: 'initial',
          type: 'double',
          size: 1,
          show: "cfl_ramp_factor[0] === 'yes'",                   
          default: [0.1],
        },                                                    
      ],
    },
    equation: {
      parameters: [
        {
          id: 'equationname',
          label: 'Equation Name',
          type: 'string',
          size: 1,
        },
        {
          id: 'equations',
          type: 'enum',
          size: 1,
          default: 'euler',
          domain: {
            RANS: 'RANS',
            Euler: 'euler',
            Viscous: 'viscous',
            LES: 'LES',
            DGRANS: 'DGRANS',
            DGviscous: 'DGviscous',
            DGLES: 'DGLES',
            DGCAA: 'DGCAA',
          }
        },
        {
          id: 'order',
          type: 'enum',
          size: 1,
          default: 'second',
          domain: {
            First: 'first',
            Second: 'second',
          }
        },
        {
          id: 'limiter',
          type: 'enum',
          size: 1,
          default: 'vanalbada',
          domain: {
            Vanalbada: 'vanalbada',
          }
        }, 
        {
          id: 'precondition',
          type: 'enum',
          size: 1,
          default: 'False',
          domain: {
            True: 'True',
            False: 'False',      
          }
        }, 
        {
          id: 'linear_gradients',
          type: 'enum',
          size: 1,
          default: 'False',
          domain: {
            True: 'True',
            False: 'False',  
          }
        }, 
        {
          id: 'Inviscid_Flux_Scheme',
          type: 'enum',
          size: 1,
          default: 'HLLC',
          domain: {
            HLLC: 'HLLC',
            Rusanov: 'Rusanov',
          }
        }, 
        {
          id: 'leastsq_gradients',
          type: 'enum',
          size: 1,
          show: "equations[0] === 'RANS'",     
          default: 'False',
          domain: {
            True: 'True',
            False: 'False',   
          }
        },
        {
          id: 'turbulence',
          type: 'enum',
          size: 1,
          show: "equations[0] === 'RANS'",   
          default: 'default',
          domain: {
            Specify: 'specify_RANS',
            Default: 'default',   
          }
        },
        {
          id: 'leastsq_gradients',
          type: 'enum',
          size: 1,
          show: "equations[0] === 'DGRANS'",     
          default: 'False',
          domain: {
            True: 'True',
            False: 'False',   
          }
        },
        {
          id: 'turbulence',
          type: 'enum',
          size: 1,
          show: "equations[0] === 'DGRANS'",   
          default: 'default',
          domain: {
            Specify: 'specify_RANS',
            Default: 'default',   
          }
        },
        {
          id: 'turbulence',
          type: 'enum',
          size: 1,
          show: "equations[0] === 'LES'",   
          default: 'default',
          domain: {
            Specify: 'specify_LES',
            Default: 'default',   
          }
        },
        {
          id: 'turbulence',
          type: 'enum',
          size: 1,
          show: "equations[0] === 'DGLES'",   
          default: 'default',
          domain: {
            Specify: 'specify_LES',
            Default: 'default',   
          }
        },
        {
          id: 'model',
          type: 'enum',
          size: 1,
          show: "turbulence[0] === 'specify_RANS'",   
          default: 'sst',
          domain: {
            SST: 'sst',
            SA_NEG: 'sa-neg',
            SST_TRANSITION: 'sst-transition',
          }
        }, 
        {
          id: 'les',
          type: 'enum',
          size: 1,
          show: "turbulence[0] === 'specify_RANS'", 
          default: 'none',
          domain: {
            None: 'none',
            DES: 'DES',
            DDES: 'DDES',
            SAS: 'SAS', 
          }
        },
        {
          id: 'les',
          type: 'enum',
          size: 1,
          show: "turbulence[0] === 'specify_LES'", 
          default: 'none',
          domain: {
            None: 'none',
            WALE: 'WALE',
          }
        },
        {
          id: 'betastar',
          type: 'double',
          size: 1,
          show: "turbulence[0] === 'specify_RANS'",                   
          default: [0.09],
        },
        {
          id: 'limit_mut',
          type: 'enum',
          size: 1,
          show: "turbulence[0] === 'specify_RANS'",     
          default: 'False',
          domain: {
            True: 'True',
            False: 'False',        
          }
        }, 
        {
          id: 'CDES',
          type: 'double',
          size: 1,
          show: "turbulence[0] === 'specify_RANS'",                   
          default: [0.65],
        },      
        {
          id: 'CDES_KW',
          type: 'double',
          size: 1,
          show: "turbulence[0] === 'specify_RANS'",                   
          default: [0.78],
        }, 
        {
          id: 'CDES_KEPS',
          type: 'double',
          size: 1,
          show: "turbulence[0] === 'specify_RANS'",                   
          default: [0.61],
        },    
        {
          id: 'Cd1',
          type: 'double',
          size: 1,
          show: "turbulence[0] === 'specify_RANS'",                   
          default: [20.0],
        }, 
        {
          id: 'Cd2',
          type: 'double',
          size: 1,
          show: "turbulence[0] === 'specify_RANS'",                   
          default: [3],
        }, 
        {
          id: 'Cw',
          type: 'double',
          size: 1,
          show: "turbulence[0] === 'specify_RANS'",                   
          default: [0.15],
        },
        {
          id: 'production',
          type: 'enum',
          size: 1,
          show: "model[0] === 'sst'",     
          default: '0',
          domain: {
            Zero: '0',
            One: '1',   
            Two: '2',           
          }
        },  
        {
          id: 'rotation_correction',
          type: 'enum',
          size: 1,
          show: "model[0] === 'sa-neg'",     
          default: 'False',
          domain: {
            True: 'True',
            False: 'False',           
          }
        },   
        {
          id: 'limit_gradient_k',
          type: 'double',
          size: 1,
          show: "model[0] === 'sa-neg'",                   
          default: [0.0],
        },
        {
          id: 'ca1',
          type: 'double',
          size: 1,
          show: "model[0] === 'sst-transition'",                   
          default: [2.0],
        }, 
        {
          id: 'ca2',
          type: 'double',
          size: 1,
          show: "model[0] === 'sst-transition'",                   
          default: [0.066],
        }, 
        {
          id: 'ce1',
          type: 'double',
          size: 1,
          show: "model[0] === 'sst-transition'",                   
          default: [1.0],
        }, 
        {
          id: 'ce2',
          type: 'double',
          size: 1,
          show: "model[0] === 'sst-transition'",                   
          default: [50.0],
        }, 
        {
          id: 'cthetat',
          type: 'double',
          size: 1,
          show: "model[0] === 'sst-transition'",                   
          default: [0.03],
        }, 
        {
          id: 'sigmagamma',
          type: 'double',
          size: 1,
          show: "model[0] === 'sst-transition'",                   
          default: [1.0],
        }, 
        {
          id: 'sigmathetat',
          type: 'double',
          size: 1,
          show: "model[0] === 'sst-transition'",                   
          default: [2.0],
        },  
        {
          id: 'separation_correction',
          type: 'enum',
          size: 1,
          show: "model[0] === 'sst-transition'",     
          default: 'True',
          domain: {
            True: 'True',
            False: 'False',        
          }
        }, 
        {
          id: 'order',
          type: 'enum',
          size: 1,
          show: "equations[0] === 'DGRANS'",             
          default: 'True',
          domain: {
            Zero: '0',
            One: '1',        
            Two: '2',
            Three: '3',   
          }
        }, 
        {
          id: 'c11_stability_parameter',
          type: 'double',
          size: 1,
          show: "equations[0] === 'DGRANS'",                   
          default: [0.0],
        }, 
        {
          id: 'LDG_upwind_parameter',
          type: 'double',
          size: 1,
          show: "equations[0] === 'DGRANS'",                   
          default: [0.5],
        }, 
        {
          id: 'Shock_Sensing',
          type: 'enum',
          size: 1,
          show: "equations[0] === 'DGRANS'",                   
          default: 'False',
          domain: {
            True: 'True',
            False: 'False',  
          }
        }, 
        {
          id: 'Shock_Sensing_k',
          type: 'double',
          size: 1,
          show: "equations[0] === 'DGRANS'",                   
          default: [1.0],
        }, 
        {
          id: 'Shock_Sensing_Viscosity_Scale',
          type: 'double',
          size: 1,
          show: "equations[0] === 'DGRANS'",                   
          default: [1.0],
        }, 
        {
          id: 'Shock_Sensing_Variable',
          type: 'enum',
          size: 1,
          show: "equations[0] === 'DGRANS'",                   
          default: 'density',
          domain: {
            Density: 'density',
            Temperature: 'temperature',  
            Mach: 'mach',
            Turbulence: 'turbulence',  
          }
        },  
        {
          id: 'order',
          type: 'enum',
          size: 1,
          show: "equations[0] === 'DGviscous'",             
          default: 'True',
          domain: {
            Zero: '0',
            One: '1',        
            Two: '2',
            Three: '3',   
          }
        }, 
        {
          id: 'c11_stability_parameter',
          type: 'double',
          size: 1,
          show: "equations[0] === 'DGviscous'",                   
          default: [0.0],
        }, 
        {
          id: 'LDG_upwind_parameter',
          type: 'double',
          size: 1,
          show: "equations[0] === 'DGviscous'",                   
          default: [0.5],
        }, 
        {
          id: 'Shock_Sensing',
          type: 'enum',
          size: 1,
          show: "equations[0] === 'DGviscous'",                   
          default: 'False',
          domain: {
            True: 'True',
            False: 'False',  
          }
        }, 
        {
          id: 'Shock_Sensing_k',
          type: 'double',
          size: 1,
          show: "equations[0] === 'DGviscous'",                   
          default: [1.0],
        }, 
        {
          id: 'Shock_Sensing_Viscosity_Scale',
          type: 'double',
          size: 1,
          show: "equations[0] === 'DGviscous'",                   
          default: [1.0],
        }, 
        {
          id: 'Shock_Sensing_Variable',
          type: 'enum',
          size: 1,
          show: "equations[0] === 'DGviscous'",                   
          default: 'density',
          domain: {
            Density: 'density',
            Temperature: 'temperature',  
            Mach: 'mach',
            Turbulence: 'turbulence',  
          }
        },     
        {
          id: 'order',
          type: 'enum',
          size: 1,
          show: "equations[0] === 'DGLES'",             
          default: 'True',
          domain: {
            Zero: '0',
            One: '1',        
            Two: '2',
            Three: '3',   
          }
        }, 
        {
          id: 'c11_stability_parameter',
          type: 'double',
          size: 1,
          show: "equations[0] === 'DGLES'",                   
          default: [0.0],
        }, 
        {
          id: 'LDG_upwind_parameter',
          type: 'double',
          size: 1,
          show: "equations[0] === 'DGLES'",                   
          default: [0.5],
        }, 
        {
          id: 'Shock_Sensing',
          type: 'enum',
          size: 1,
          show: "equations[0] === 'DGLES'",                   
          default: 'False',
          domain: {
            True: 'True',
            False: 'False',  
          }
        }, 
        {
          id: 'Shock_Sensing_k',
          type: 'double',
          size: 1,
          show: "equations[0] === 'DGLES'",                   
          default: [1.0],
        }, 
        {
          id: 'Shock_Sensing_Viscosity_Scale',
          type: 'double',
          size: 1,
          show: "equations[0] === 'DGLES'",                   
          default: [1.0],
        }, 
        {
          id: 'Shock_Sensing_Variable',
          type: 'enum',
          size: 1,
          show: "equations[0] === 'DGLES'",                   
          default: 'density',
          domain: {
            Density: 'density',
            Temperature: 'temperature',  
            Mach: 'mach',
            Turbulence: 'turbulence',  
          }
        },  
        {
          id: 'order',
          type: 'enum',
          size: 1,
          show: "equations[0] === 'DGCAA'",             
          default: 'True',
          domain: {
            Zero: '0',
            One: '1',        
            Two: '2',
            Three: '3',   
          }
        }, 
        {
          id: 'c11_stability_parameter',
          type: 'double',
          size: 1,
          show: "equations[0] === 'DGCAA'",                   
          default: [0.0],
        }, 
        {
          id: 'LDG_upwind_parameter',
          type: 'double',
          size: 1,
          show: "equations[0] === 'DGCAA'",                   
          default: [0.5],
        }, 
        {
          id: 'Shock_Sensing',
          type: 'enum',
          size: 1,
          show: "equations[0] === 'DGCAA'",                   
          default: 'False',
          domain: {
            True: 'True',
            False: 'False',  
          }
        }, 
        {
          id: 'Shock_Sensing_k',
          type: 'double',
          size: 1,
          show: "equations[0] === 'DGCAA'",                   
          default: [1.0],
        }, 
        {
          id: 'Shock_Sensing_Viscosity_Scale',
          type: 'double',
          size: 1,
          show: "equations[0] === 'DGCAA'",                   
          default: [1.0],
        }, 
        {
          id: 'Shock_Sensing_Variable',
          type: 'enum',
          size: 1,
          show: "equations[0] === 'DGCAA'",                   
          default: 'density',
          domain: {
            Density: 'density',
            Temperature: 'temperature',  
            Mach: 'mach',
            Turbulence: 'turbulence',  
          }
        },                                                 
      ],
    },
    materials: {
      parameters: [
        {
          id: 'material',
          label: 'Material Name',
          type: 'string',
          size: 1,
          default: ["air"],
        },
        {
          id: 'gamma',
          type: 'double',
          size: 1,         
          default: [1.4],
        },
        {
          id: 'gas_constant',
          type: 'double',
          size: 1,         
          default: [287.0],
        },
        {
          id: 'Sutherlands_const',
          type: 'double',
          size: 1,         
          default: [110.4],
        },  
        {
          id: 'Prandtl_No',
          type: 'double',
          size: 1,         
          default: [0.72],
        },
        {
          id: 'Turbulent_Prandtl_No',
          type: 'double',
          size: 1,         
          default: [0.9],
        },                                                   
      ],
    },
    ics: {
      parameters: [
        {
          id: 'ic_name',
          label: 'Initial Condition Label',
          type: 'string',
          size: 1,
          default: ["IC_INSERT NUMBER"],
        },
        {
          id: 'temperature',
          type: 'double',
          size: 1,         
          default: [293.0],
        },
        {
          id: 'pressure',
          type: 'double',
          size: 1,         
          default: [101325.0],
        },
        {
          id: 'vector',
          type: 'double',
          size: 3,         
          default: [1.0,0.0,0.0],
        },  
        {
          id: 'Mach',
          type: 'double',
          size: 1,         
          default: [0.20],
        },
        {
          id: 'viscocity',
          type: 'double',
          size: 1,         
          default: [1.83e-5],
        },
        {
          id: 'Reynolds_No',
          type: 'double',
          size: 1,         
          default: [5.0e6],
        },
        {
          id: 'Reference_Length',
          type: 'double',
          size: 1,         
          default: [1.0],
        },
        {
          id: 'turbulence_intensity',
          type: 'double',
          size: 1,                 
          default: [0.01],
        },   
        {
          id: 'ambient_turbulence_intensity',
          type: 'double',
          size: 1,         
          default: [0.01],
        },
        {
          id: 'eddy_viscosity_ratio',
          type: 'double',
          size: 1,         
          default: [0.1],
        },  
        {
          id: 'ambient_eddy_viscosity_ratio',
          type: 'double',
          size: 1,         
          default: [0.1],
        },
        {
          id: 'profile_abl',
          type: 'enum',
          size: 1,   
          default: 'True',
          domain: {
            Specify: 'abl',
            No: '-',            
          }
        },  
        {
          id: 'profile_field',
          type: 'enum',
          size: 1,   
          default: 'True',
          domain: {
            Specify: 'specify',
            No: '-',            
          }
        },  
        {
          id: 'roughness_length',
          type: 'double',
          size: 1, 
          show: "profile_abl[0] === 'abl'",          
          default: [0.0003],
        },
        {
          id: 'friction_velocity',
          type: 'double',
          size: 1,       
          show: "profile_abl[0] === 'abl'",    
          default: [0.4],
        },
        {
          id: 'surface_layer_height',
          type: 'double',
          size: 1,
          show: "profile_abl[0] === 'abl'",                 
          default: [-1.0],
        },      
        {
          id: 'Monin-Obukhov_length',
          type: 'double',
          size: 1,
          show: "profile_abl[0] === 'abl'",                 
          default: [-1.0],
        },     
        {        
          id: 'TKE',
          type: 'double',
          size: 1,
          show: "profile_abl[0] === 'abl'",                 
          default: [0.928],
        },  
        {
          id: 'z0',
          type: 'double',
          size: 1,
          show: "profile_abl[0] === 'abl'",                 
          default: [-0.75],
        },      
        {
          id: 'field',
          type: 'string',
          size: 1,    
          show: "profile_field[0] === 'specify'",            
        },   
        {
          id: 'use_wall_distance',
          type: 'enum',
          size: 1,   
          show: "profile_field[0] === 'specify'",     
          default: 'True',
          domain: {
            True: 'True',
            False: 'False',            
          }
        }, 
        {
          id: 'reference',
          type: 'string',
          size: 1,         
          default: ["IC..."],
        },
        {
          id: 'total_pressure_ratio',
          type: 'double',
          size: 1,         
          default: [1.0],
        },
        {
          id: 'total_temperature_ratio',
          type: 'double',
          size: 1,                 
          default: [1.0],
        },   
        {
          id: 'mach',
          type: 'double',
          size: 1,         
          default: [0.20],
        },
        {
          id: 'vector',
          type: 'double',
          size: 3,         
          default: [1.0,0.0,0.0],
        },
        {
          id: 'static_pressure_ratio',
          type: 'double',
          size: 1,         
          default: [1.0],
        },
        {
          id: 'mass_flow_ratio',
          type: 'double',
          size: 1,         
          default: [1.0],
        },  
        {
          id: 'mass_flow_rate',
          type: 'double',
          size: 1,         
          default: [10.0],
        },                                  
      ],
    },        
    bcs: {
      parameters: [
        {
          id: 'bc_name',
          label: 'Boundary Condition Label',
          type: 'string',
          default:["BC_INSERT NUMBER HERE"],
          size: 1,
        },  
        {
          id: 'ref',
          type: 'int',
          size: 1,         
          default: [1],
        },
        {
          id: 'zone',
          type: 'double',
          size: 1,        
          default: [1],
        },
        {
          id: 'type',
          type: 'enum',
          size: 1,   
          default: 'wall',
          domain: {
            Wall: 'wall',
            Farfield: 'farfield',           
            Inflow: 'inflow',
            Outflow: 'outflow',    
            Symmetry: 'symmetry',
            Periodic: 'periodic',  
          }
        }, 
        {
          id: 'kind',
          type: 'enum',
          size: 1,   
          show: "type[0] === 'wall'",  
          default: 'slip',
          domain: {
            Slip: 'slip',
            No_Slip: 'noslip',           
            Wall_Function: 'wallfunction',
          }
        },   
        {
          id: 'roughness',
          type: 'enum',
          size: 1,   
          show: "type[0] === 'wall'",  
          default: 'no',
          domain: {
            Define: 'define',
            No: 'no',           
          }
        },   
        {
          id: 'type',
          type: 'enum',
          size: 1,   
          show: "roughness[0] === 'define'",  
          default: 'height',
          domain: {
            Height: 'height',
            Length: 'length',           
          }
        },  
        {
          id: 'scalar',
          type: 'double',
          size: 1,        
          show: "roughness[0] === 'define'",       
          default: [],
        },
        {
          id: 'field',
          type: 'string',
          size: 1,    
          show: "roughness[0] === 'define'",           
          default: [1.0],
        },
        {
          id: 'specifiy_V',
          type: 'enum',
          size: 1,   
          show: "type[0] === 'wall'",  
          default: 'no',
          domain: {
            Define: 'define',
            No: 'no',           
          }
        },   
        {
          id: 'V',
          type: 'enum',
          size: 1,   
          show: "specifiy_V[0] === 'define'",  
          default: 'linear',
          domain: {
            Linear: 'linear',
            Rotating: 'rotating',           
          }
        }, 
        {
          id: 'vector',
          type: 'double',
          size: 3,        
          show: "V[0] === 'linear'",   
          default: [1.0,0.0,0.0],
        },
        {
          id: 'Mach',
          type: 'double',
          size: 1,         
          show: "V[0] === 'linear'",  
          default: [0.20],
        },  
        {
          id: 'omega',
          type: 'double',
          size: 1, 
          show: "V[0] === 'rotating'",          
          default: [2.0],
        },
        {
          id: 'axis',
          type: 'double',
          size: 1,       
          show: "V[0] === 'rotating'",    
          default: [],
        },
        {
          id: 'origin',
          type: 'double',
          size: 1,
          show: "V[0] === 'rotating'",                 
          default: [],
        }, 
        {
          id: 'temperature',
          type: 'enum',
          size: 1,   
          show: "type[0] === 'wall'",  
          default: 'no',
          domain: {
            Define: 'define',
            No: 'no',           
          }
        }, 
        {
          id: 'temp_scalar',
          type: 'double',
          size: 1,       
          show: "temperature[0] === 'define'",    
          default: [280.0],
        },
        {
          id: 'temp_field',
          type: 'string',
          size: 1,
          show: "temperature[0] === 'define'",                 
          default: ["VTP File"],
        }, 
        {
          id: 'farfield_kind',
          type: 'enum',
          size: 1,   
          show: "type[0] === 'farfield'",  
          default: 'riemann',
          domain: {
            Riemann: 'riemann',
            Pressure: 'pressure',   
            Supersonic: 'supersonic',           
          }
        }, 
        {
          id: 'farfield_ic',
          type: 'string',
          size: 1,
          show: "type[0] === 'farfield'",                 
          default: [],
        },      
        {
          id: 'ABL',
          type: 'enum',
          size: 1,   
          show: "type[0] === 'farfield'",  
          default: 'ignore',
          domain: {
            No: 'ignore',
            ABL: 'define',          
          }
        },    
        {        
          id: 'roughness_length',
          type: 'double',
          size: 1,
          show: "ABL[0] === 'define'",                 
          default: [0.05],
        },  
        {
          id: 'friction_velocity',
          type: 'double',
          size: 1,
          show: "ABL[0] === 'define'",                 
          default: [2.0],
        },      
        {
          id: 'surface_layer_height',
          type: 'double',
          size: 1,
          show: "ABL[0] === 'define'",                 
          default: [1000],
        },     
        {
          id: 'Monin-Obukhov_length',
          type: 'double',
          size: 1,
          show: "ABL[0] === 'define'",                 
          default: [2.0],
        },   
        {
          id: 'TKE',
          type: 'double',
          size: 1,
          show: "ABL[0] === 'define'",                 
          default: [1.0],
        },  
        {
          id: 'z0',
          type: 'double',
          size: 1,
          show: "ABL[0] === 'define'",                 
          default: [0.0],
        },  
        {
          id: 'turbulence',
          type: 'enum',
          size: 1,   
          show: "type[0] === 'farfield'",  
          default: 'ignore',
          domain: {
            No: 'ignore',
            Turb: 'define',          
          }
        }, 
        {
          id: 'length_scale',
          type: 'string',
          size: 1,       
          show: "turbulence[0] === 'define'",    
          default: ["VTP File"],
        },  
        {
          id: 'reynolds_tensor',
          type: 'string',
          size: 1,         
          show: "turbulence[0] === 'define'",  
          default: ["VTP File"],
        }, 
        {
          id: 'kind',
          type: 'enum',
          size: 1,   
          show: "type[0] === 'inflow'",  
          default: 'default',
          domain: {
            Default: 'default',
            Massflow: 'mass_flow',          
          }
        },    
        {
          id: 'kind',
          type: 'enum',
          size: 1,   
          show: "type[0] === 'outflow'",  
          default: 'pressure',
          domain: {
            Pressure: 'pressure',
            Massflow: 'massflow',    
            Radial: 'radial_pressure_gradient',          
          }
        },  
        {
          id: 'reference_radius',
          type: 'double',
          size: 1,  
          show: "outflow_kind[0] === 'radial_pressure_grad'",        
          default: [1.0],
        },    
        {
          id: 'condition',
          type: 'string',
          size: 1,  
          show: "type[0] === 'outflow'",        
          default: [],
        },   
        {
          id: 'kind',
          type: 'enum',
          size: 1,   
          show: "type[0] === 'periodic'",  
          default: 'rotated',
          domain: {
            Rotated: 'rotated',
            Linear: 'linear',            
          }
        },    
        {
          id: 'theta',
          type: 'string',
          size: 1,  
          show: "kind[0] === 'rotated'",        
          default: [],
        },  
        {
          id: 'axis',
          type: 'string',
          size: 1,  
          show: "kind[0] === 'rotated'",        
          default: [],
        },  
        {
          id: 'origin',
          type: 'string',
          size: 1,  
          show: "kind[0] === 'rotated'",        
          default: [],
        },   
        {
          id: 'linear_vector',
          type: 'string',
          size: 3,  
          show: "kind[0] === 'linear'",        
          default: [1.0,0.0,0.0],
        },                       
      ],
    },  
    fzones: {
      parameters: [
        {
          id: 'fz',
          label: 'Fluid Zone',
          type: 'string',
          size: 1,
          default: ["FZ_INSERT NUMBER HERE"],
        },
        {
          id: 'type',
          type: 'string',
          size: 1,         
          default: ["disc"],
        },
        {
          id: 'def',
          type: 'string',
          size: 1,         
          default: ["blahblahblah.vtp"],
        },                                                   
      ],
    },
    out: {
      parameters: [
        {
          id: 'write_output',
          label: 'Output Settings Name',
          type: 'string',
          size: 1,
        },
        {
          id: 'format',
          type: 'enum',
          size: 1,   
          default: 'vtk',
          domain: {
            VTK: 'vtk',
            Ensight: 'ensight',     
            Native: 'native',          
          }
        },  
        {
          id: 'surface_variables',
          type: 'string',
          size: 2,         
          default: ["V","p"],
        },
        {
          id: 'volume_variables',
          type: 'string',
          size: 2,         
          default: ["V","p"],
        },  
        {
          id: 'volume_interpolate_spec',
          type: 'enum',
          size: 1,   
          default: 'default',
          domain: {
            Specify: 'specify',
            Default: 'default',          
          }
        },  
        {
          id: 'volume_interpolate',
          type: 'string',
          size: 1,         
          show: "volume_interpolate_spec[0] === 'specify'",
          default: ["mesh.vtp"],
        },
        {
          id: 'scripts_spec',
          type: 'enum',
          size: 1,   
          default: 'default',
          domain: {
            Specify: 'specify',
            Default: 'default',         
          }
        }, 
        {
          id: 'scripts',
          type: 'string',
          size: 2,         
          show: "scripts_spec[0] === 'specify'",
          default: ["paraview_catalyst1.py","paraview_catalyst2.py"],
        },
        {
          id: 'variable_name_spec',
          type: 'enum',
          size: 1,   
          default: 'default',
          domain: {
            Specify: 'specify',
            Default: 'default',           
          }
        },
        {
          id: 'variable_name_alias',
          type: 'string',
          size: 1,
          show: "variable_name_spec[0] === 'specify'",                   
          default: [],
        }, 
        {
          id: 'frequency',
          type: 'enum',
          size: 1,   
          default: 'default',
          domain: {
            Specify: 'specify',
            Default: 'default',           
          }
        },   
        {
          id: 'volume_data',
          type: 'double',
          size: 1,         
          default: [3],
        },      
        {
          id: 'surface_data',
          type: 'double',
          size: 1,         
          default: [3],
        },    
        {
          id: 'volume_interpolate_frequency',
          type: 'double',
          size: 1,         
          default: [3],
        },    
        {
          id: 'checkpoint',
          type: 'double',
          size: 1,         
          default: [3],
        },    
        {
          id: 'volume_data_start',
          type: 'double',
          size: 1,         
          default: [1],
        },    
        {
          id: 'surface_data_start',
          type: 'double',
          size: 1,         
          default: [1],
        },    
        {
          id: 'volume_interpolate_start',
          type: 'double',
          size: 1,         
          default: [1],
        },    
        {
          id: 'checkpoint_start',
          type: 'double',
          size: 1,         
          default: [1],
        }, 
        {
          id: 'high_order_surface_spec',
          type: 'enum',
          size: 1,   
          default: 'default',
          domain: {
            Specify: 'specify',
            Default: 'default',          
          }
        },   
        {
          id: 'high_order_surface_list',
          type: 'int',
          size: 1,         
          show: "high_order_surface_spec[0] === 'specify'",   
          default: [1],
        },  
        {
          id: 'no_volume_vtk',
          type: 'enum',
          size: 1,   
          default: 'False',
          domain: {
            True: 'True',
            False: 'False',         
          }
        },   
        {
          id: 'calculate_averge_and_rms',
          type: 'enum',
          size: 1,   
          default: 'False',
          domain: {
            True: 'True',
            False: 'False',       
          }
        },    
        {
          id: 'average_start_time_cycle',
          type: 'double',
          size: 1, 
          default: [],
        },                                          
      ],
    },     
  },
};
