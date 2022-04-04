module.exports = {
  order: ['timemarcher', 'solverscheme','cfldata','equations',
  'materialspec','initialconditions','boundaryconditions','output'],
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
    output: {
      size: -1,
      attributes: ['out'],
      hooks: [
        {
          type: 'copyParameterToViewName',
          attribute: 'out.output_name',
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
          id: 'ramp',
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
          show: "ramp[0] === 'yes'",                   
          default: [1.05],
        },
        {
          id: 'initial',
          type: 'double',
          size: 1,
          show: "ramp[0] === 'yes'",                   
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
          id: 'type',
          type: 'enum',
          size: 1,
          default: 'euler',
          domain: {
            Euler: 'euler',
            RANS: 'rans',
            Viscous: 'viscous',
            LES: 'les',
            DGRANS: 'dgrans',
            DGviscous: 'dgviscous',
            DGLES: 'dgles',
            DGCAA: 'dgcaa',
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
            Default: 'default',
          }
        }, 
        {
          id: 'precondition',
          type: 'enum',
          size: 1,
          default: 'true',
          domain: {
            True: 'true',
            False: 'false',  
            Default: 'default',        
          }
        }, 
        {
          id: 'linear_gradients',
          type: 'enum',
          size: 1,
          default: 'false',
          domain: {
            True: 'true',
            False: 'false',     
            Default: 'default',     
          }
        }, 
        {
          id: 'inviscid_flux_scheme',
          type: 'enum',
          size: 1,
          default: 'hllc',
          domain: {
            HLLC: 'hllc',
            Rusanov: 'rusanov',     
            Default: 'default',  
          }
        }, 
        {
          id: 'leastsq_gradients',
          type: 'enum',
          size: 1,
          show: "type[0] === 'rans'",     
          default: 'false',
          domain: {
            True: 'true',
            False: 'false',    
            Default: 'default',      
          }
        },
        {
          id: 'model',
          type: 'enum',
          size: 1,
          show: "type[0] === 'rans'",   
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
          show: "type[0] === 'rans'", 
          default: 'none',
          domain: {
            None: 'none',
            DES: 'des',
            DDES: 'ddes',
            SAS: 'sas',    
            Default: 'default',   
          }
        },
        {
          id: 'betastar',
          type: 'double',
          size: 1,
          show: "type[0] === 'rans'",                   
          default: [0.09],
        },
        {
          id: 'limit_mut',
          type: 'enum',
          size: 1,
          show: "type[0] === 'rans'",     
          default: 'false',
          domain: {
            True: 'true',
            False: 'false',   
            Default: 'default',          
          }
        }, 
        {
          id: 'cdes',
          type: 'double',
          size: 1,
          show: "type[0] === 'rans'",                   
          default: [0.65],
        },      
        {
          id: 'cdes_kw',
          type: 'double',
          size: 1,
          show: "type[0] === 'rans'",                   
          default: [0.78],
        }, 
        {
          id: 'cdes_keps',
          type: 'double',
          size: 1,
          show: "type[0] === 'rans'",                   
          default: [0.61],
        },    
        {
          id: 'cd1',
          type: 'double',
          size: 1,
          show: "type[0] === 'rans'",                   
          default: [20.0],
        }, 
        {
          id: 'cd2',
          type: 'double',
          size: 1,
          show: "type[0] === 'rans'",                   
          default: [3],
        }, 
        {
          id: 'cdw',
          type: 'double',
          size: 1,
          show: "type[0] === 'rans'",                   
          default: [0.15],
        },
        {
          id: 'production',
          type: 'enum',
          size: 1,
          show: "type[0] === 'sst'",     
          default: 'zero',
          domain: {
            Zero: 'zero',
            One: 'one',   
            Two: 'two',           
          }
        },  
        {
          id: 'rotation_correction',
          type: 'enum',
          size: 1,
          show: "type[0] === 'sa-neg'",     
          default: 'false',
          domain: {
            True: 'true',
            False: 'false',   
            Default: 'default',           
          }
        },   
        {
          id: 'limit_gradient_k',
          type: 'double',
          size: 1,
          show: "type[0] === 'neg'",                   
          default: [0.5],
        },
        {
          id: 'ca1',
          type: 'double',
          size: 1,
          show: "type[0] === 'sst-transition'",                   
          default: [2.0],
        }, 
        {
          id: 'ca2',
          type: 'double',
          size: 1,
          show: "type[0] === 'sst-transition'",                   
          default: [0.066],
        }, 
        {
          id: 'ce1',
          type: 'double',
          size: 1,
          show: "type[0] === 'sst-transition'",                   
          default: [1.0],
        }, 
        {
          id: 'ce2',
          type: 'double',
          size: 1,
          show: "type[0] === 'sst-transition'",                   
          default: [50.0],
        }, 
        {
          id: 'cthetat',
          type: 'double',
          size: 1,
          show: "type[0] === 'sst-transition'",                   
          default: [0.03],
        }, 
        {
          id: 'sigmagamma',
          type: 'double',
          size: 1,
          show: "type[0] === 'sst-transition'",                   
          default: [1.0],
        }, 
        {
          id: 'sigmathetat',
          type: 'double',
          size: 1,
          show: "type[0] === 'sst-transition'",                   
          default: [2.0],
        },  
        {
          id: 'separation_correction',
          type: 'enum',
          size: 1,
          show: "type[0] === 'sst-transition'",     
          default: 'true',
          domain: {
            True: 'true',
            False: 'false',   
            Default: 'default',          
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
          id: 'sutherlands_const',
          type: 'double',
          size: 1,         
          default: [110.4],
        },  
        {
          id: 'prandtl_no',
          type: 'double',
          size: 1,         
          default: [0.72],
        },
        {
          id: 'turb_prandtl_no',
          type: 'double',
          size: 1,         
          default: [0.9],
        },                                                   
      ],
    },
    ics: {
      parameters: [
        {
          id: 'iclabel',
          label: 'Initial Condition Label',
          type: 'string',
          size: 1,
        },
        {
          id: 'static_temp',
          type: 'double',
          size: 1,         
          default: [293.0],
        },
        {
          id: 'static_pressure',
          type: 'double',
          size: 1,         
          default: [101325.0],
        },
        {
          id: 'ic_velocity_vector',
          type: 'double',
          size: 1,         
          default: [],
        },  
        {
          id: 'ic_mach',
          type: 'double',
          size: 1,         
          default: [0.20],
        },
        {
          id: 'viscocity_dynamic',
          type: 'double',
          size: 1,         
          default: [1.83e-5],
        },
        {
          id: 'reynolds_no',
          type: 'double',
          size: 1,         
          default: [5.0e6],
        },
        {
          id: 'reference_length',
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
          id: 'amb_turbulence_intensity',
          type: 'double',
          size: 1,         
          default: [0.01],
        },
        {
          id: 'eddy_visc_ratio',
          type: 'double',
          size: 1,         
          default: [0.1],
        },  
        {
          id: 'amb_eddy_visc_ratio',
          type: 'double',
          size: 1,         
          default: [0.1],
        },
        {
          id: 'abl',
          type: 'enum',
          size: 1,   
          default: 'true',
          domain: {
            Specify: 'specify',
            No: '-',            
          }
        },  
        {
          id: 'roughness_length',
          type: 'double',
          size: 1, 
          show: "abl[0] === 'specify'",          
          default: [0.0003],
        },
        {
          id: 'friction_vel',
          type: 'double',
          size: 1,       
          show: "abl[0] === 'specify'",    
          default: [0.4],
        },
        {
          id: 'surface_layer_height',
          type: 'double',
          size: 1,
          show: "abl[0] === 'specify'",                 
          default: [-1.0],
        },      
        {
          id: 'monin_obukhov_length',
          type: 'double',
          size: 1,
          show: "abl[0] === 'specify'",                 
          default: [-1.0],
        },     
        {        
          id: 'tke',
          type: 'double',
          size: 1,
          show: "abl[0] === 'specify'",                 
          default: [0.928],
        },  
        {
          id: 'z0',
          type: 'double',
          size: 1,
          show: "abl[0] === 'specify'",                 
          default: [-0.75],
        },      
        {
          id: 'field',
          type: 'string',
          size: 1,            
        },   
        {
          id: 'walldis',
          type: 'enum',
          size: 1,   
          default: 'true',
          domain: {
            True: 'true',
            False: 'false',            
          }
        }, 
        {
          id: 'total_pressure_ratio',
          type: 'double',
          size: 1,         
          default: [1.0],
        },
        {
          id: 'total_temp_ratio',
          type: 'double',
          size: 1,                 
          default: [1.0],
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
          id: 'bclabel',
          label: 'Boundary Condition Label',
          type: 'string',
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
          default: [],
        },
        {
          id: 'bc_type',
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
          id: 'wall_kind',
          type: 'enum',
          size: 1,   
          show: "bc_type[0] === 'wall'",  
          default: 'slip',
          domain: {
            Slip: 'slip',
            No_Slip: 'noslip',           
            Wall_Function: 'wallfunction',
          }
        },   
        {
          id: 'roughness_spec',
          type: 'enum',
          size: 1,   
          show: "bc_type[0] === 'wall'",  
          default: 'no',
          domain: {
            Define: 'define_roughness',
            No: 'no',           
          }
        },   
        {
          id: 'roughness_type',
          type: 'enum',
          size: 1,   
          show: "roughness_spec[0] === 'define_roughness'",  
          default: 'height',
          domain: {
            Height: 'height',
            Length: 'length',           
          }
        },  
        {
          id: 'roughness_scalar',
          type: 'double',
          size: 1,        
          show: "roughness_spec[0] === 'define_roughness'",       
          default: [],
        },
        {
          id: 'roughness_field',
          type: 'string',
          size: 1,    
          show: "roughness_spec[0] === 'define_roughness'",           
          default: [1.0],
        },
        {
          id: 'wall_vel_spec',
          type: 'enum',
          size: 1,   
          show: "bc_type[0] === 'wall'",  
          default: 'no',
          domain: {
            Define: 'define_wall_vel',
            No: 'no',           
          }
        },   
        {
          id: 'wall_vel_type',
          type: 'enum',
          size: 1,   
          show: "wall_vel_spec[0] === 'define_wall_vel'",  
          default: 'linear',
          domain: {
            Linear: 'linear',
            Rotating: 'rotating',           
          }
        }, 
        {
          id: 'bc_velocity_vector',
          type: 'double',
          size: 1,        
          show: "wall_vel_type[0] === 'linear'",   
          default: [],
        },
        {
          id: 'bc_mach',
          type: 'double',
          size: 1,         
          show: "wall_vel_type[0] === 'linear'",  
          default: [0.20],
        },  
        {
          id: 'bc_omega',
          type: 'double',
          size: 1, 
          show: "wall_vel_type[0] === 'rotating'",          
          default: [2.0],
        },
        {
          id: 'rotation_axis',
          type: 'double',
          size: 1,       
          show: "wall_vel_type[0] === 'rotating'",    
          default: [],
        },
        {
          id: 'rotation_origin',
          type: 'double',
          size: 1,
          show: "wall_vel_type[0] === 'rotating'",                 
          default: [],
        }, 
        {
          id: 'wall_temp_spec',
          type: 'enum',
          size: 1,   
          show: "bc_type[0] === 'wall'",  
          default: 'no',
          domain: {
            Define: 'define_wall_temp',
            No: 'no',           
          }
        }, 
        {
          id: 'wall_temp_scalar',
          type: 'double',
          size: 1,       
          show: "wall_temp_spec[0] === 'define_wall_temp'",    
          default: [280.0],
        },
        {
          id: 'wall_temp_field',
          type: 'string',
          size: 1,
          show: "wall_temp_spec[0] === 'define_wall_temp'",                 
          default: [],
        }, 
        {
          id: 'farfield_kind',
          type: 'enum',
          size: 1,   
          show: "bc_type[0] === 'farfield'",  
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
          show: "bc_type[0] === 'farfield'",                 
          default: [],
        },      
        {
          id: 'abl',
          type: 'enum',
          size: 1,   
          show: "bc_type[0] === 'farfield'",  
          default: 'ignore_abl',
          domain: {
            No: 'ignore_abl',
            ABL: 'define_abl',          
          }
        },    
        {        
          id: 'roughness_length',
          type: 'double',
          size: 1,
          show: "abl[0] === 'define_abl'",                 
          default: [0.05],
        },  
        {
          id: 'friction_vel',
          type: 'double',
          size: 1,
          show: "abl[0] === 'define_abl'",                 
          default: [2.0],
        },      
        {
          id: 'surface_layer_height',
          type: 'double',
          size: 1,
          show: "abl[0] === 'define_abl'",                 
          default: [1000],
        },     
        {
          id: 'monin_obukhov_length',
          type: 'double',
          size: 1,
          show: "abl[0] === 'define_abl'",                 
          default: [2.0],
        },   
        {
          id: 'tke',
          type: 'double',
          size: 1,
          show: "abl[0] === 'define_abl'",                 
          default: [1.0],
        },  
        {
          id: 'z0',
          type: 'double',
          size: 1,
          show: "abl[0] === 'define_abl'",                 
          default: [0.0],
        },  
        {
          id: 'turb_profile',
          type: 'enum',
          size: 1,   
          show: "bc_type[0] === 'farfield'",  
          default: 'ignore_turb',
          domain: {
            No: 'ignore_turb',
            Turb: 'define_turb',          
          }
        }, 
        {
          id: 'length_scale',
          type: 'string',
          size: 1,         
          default: [],
        },  
        {
          id: 'reynolds_tensor',
          type: 'string',
          size: 1,         
          default: [],
        }, 
        {
          id: 'inflow_kind',
          type: 'enum',
          size: 1,   
          show: "bc_type[0] === 'inflow'",  
          default: 'default',
          domain: {
            Default: 'default',
            Massflow: 'mass_flow',          
          }
        },    
        {
          id: 'outflow_kind',
          type: 'enum',
          size: 1,   
          show: "bc_type[0] === 'outflow'",  
          default: 'pressure',
          domain: {
            Pressure: 'pressure',
            Massflow: 'mass_flow',    
            Radial: 'radial_pressure_grad',          
          }
        },  
        {
          id: 'ref_radius',
          type: 'double',
          size: 1,  
          show: "outflow_kind[0] === 'radial_pressure_grad'",        
          default: [1.0],
        },    
        {
          id: 'outflow_ic',
          type: 'string',
          size: 1,  
          show: "bc_type[0] === 'outflow'",        
          default: [],
        },   
        {
          id: 'periodic_kind',
          type: 'enum',
          size: 1,   
          show: "bc_type[0] === 'periodic'",  
          default: 'rotated',
          domain: {
            Rotated: 'rotated',
            Linear: 'linear',            
          }
        },    
        {
          id: 'periodic_theta',
          type: 'string',
          size: 1,  
          show: "periodic_kind[0] === 'rotated'",        
          default: [],
        },  
        {
          id: 'periodic_axis',
          type: 'string',
          size: 1,  
          show: "periodic_kind[0] === 'rotated'",        
          default: [],
        },  
        {
          id: 'periodic_origin',
          type: 'string',
          size: 1,  
          show: "periodic_kind[0] === 'rotated'",        
          default: [],
        },   
        {
          id: 'linear_vec',
          type: 'string',
          size: 1,  
          show: "periodic_kind[0] === 'linear'",        
          default: [],
        },                       
      ],
    },  
    out: {
      parameters: [
        {
          id: 'outputname',
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
          size: 1,         
          default: [],
        },
        {
          id: 'volume_variables',
          type: 'string',
          size: 1,         
          default: [],
        },  
        {
          id: 'volume_interpolate',
          type: 'enum',
          size: 1,   
          default: 'off',
          domain: {
            On: 'interpolate_on',
            Off: 'interpolate_off',          
          }
        },  
        {
          id: 'volume_interpolate_spec',
          type: 'string',
          size: 1,         
          show: "volume_interpolate[0] === 'interpolate_on'",
          default: [],
        },
        {
          id: 'scripts',
          type: 'enum',
          size: 1,   
          default: 'scripts_off',
          domain: {
            On: 'scripts_on',
            Off: 'scripts_off',          
          }
        }, 
        {
          id: 'scripts_spec',
          type: 'string',
          size: 1,         
          show: "scripts[0] === 'scripts_on'",
          default: [],
        },
        {
          id: 'variable_name_alias',
          type: 'enum',
          size: 1,   
          default: 'vna_off',
          domain: {
            On: 'vna_on',
            Off: 'vna_off',          
          }
        },
        {
          id: 'variable_name_spec',
          type: 'string',
          size: 1,
          show: "variable_name_alias[0] === 'vna_on'",                   
          default: [],
        }, 
        {
          id: 'volume_data_freq',
          type: 'double',
          size: 1,         
          default: [3],
        },     
        {
          id: 'surface_data_freq',
          type: 'double',
          size: 1,         
          default: [3],
        },    
        {
          id: 'volume_interpolate_freq',
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
          id: 'high_order_surface_list',
          type: 'enum',
          size: 1,   
          default: 'dg_off',
          domain: {
            On: 'dg_on',
            Off: 'dg_off',          
          }
        },   
        {
          id: 'high_order_surface_zone',
          type: 'int',
          size: 1,         
          default: [1],
        },  
        {
          id: 'no_volume_vtk',
          type: 'enum',
          size: 1,   
          default: 'false',
          domain: {
            True: 'true',
            False: 'false', 
            Ignore: 'ignore',         
          }
        },   
        {
          id: 'calculate_averge_and_rms',
          type: 'enum',
          size: 1,   
          default: 'false',
          domain: {
            True: 'true',
            False: 'false', 
            Ignore: 'ignore',         
          }
        },    
        {
          id: 'average_start_time_cycle',
          type: 'enum',
          size: 1,   
          default: 'no',
          domain: {
            Yes: 'yes_rms',
            No: 'no',       
          }
        },   
        {
          id: 'average_start_time',
          type: 'double',
          size: 1,
          show: "average_start_time_cycle[0] === 'yes_rms'",            
          default: [1000],
        },                                          
      ],
    },     
  },
};
