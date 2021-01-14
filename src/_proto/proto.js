/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
'use strict';

var $protobuf = require('protobufjs/light');

var $root = (
  $protobuf.roots['default'] || ($protobuf.roots['default'] = new $protobuf.Root())
).addJSON({
  com: {
    nested: {
      xuyanze: {
        nested: {
          thetago: {
            nested: {
              common: {
                nested: {
                  codec: {
                    nested: {
                      protobuf: {
                        options: {
                          optimize_for: 'SPEED',
                          java_package: 'com.xuyanze.thetago.common.codec.protobuf',
                          java_outer_classname: 'AiStep',
                        },
                        nested: {
                          AiStepResponse: {
                            fields: {
                              code: {
                                type: 'Code',
                                id: 1,
                              },
                              analysis: {
                                type: 'Analysis',
                                id: 2,
                              },
                            },
                          },
                          Analysis: {
                            fields: {
                              moveInfos: {
                                rule: 'repeated',
                                type: 'MoveInfos',
                                id: 1,
                              },
                              ownership: {
                                rule: 'repeated',
                                type: 'double',
                                id: 2,
                                options: {
                                  packed: false,
                                },
                              },
                              rootInfo: {
                                type: 'RootInfo',
                                id: 3,
                              },
                            },
                          },
                          MoveInfos: {
                            fields: {
                              prior: {
                                type: 'double',
                                id: 1,
                              },
                              move: {
                                type: 'string',
                                id: 2,
                              },
                              order: {
                                type: 'int32',
                                id: 3,
                              },
                            },
                          },
                          RootInfo: {
                            fields: {
                              winrate: {
                                type: 'double',
                                id: 1,
                              },
                            },
                          },
                          EndMoveRequest: {
                            fields: {
                              timestamp: {
                                type: 'int64',
                                id: 1,
                              },
                            },
                          },
                          EndMoveResponse: {
                            fields: {
                              timestamp: {
                                type: 'int64',
                                id: 1,
                              },
                            },
                          },
                          FastBackForwardRequest: {
                            fields: {
                              timestamp: {
                                type: 'int64',
                                id: 1,
                              },
                            },
                          },
                          FastBackForwardResponse: {
                            fields: {
                              timestamp: {
                                type: 'int64',
                                id: 1,
                              },
                            },
                          },
                          FastForwardRequest: {
                            fields: {
                              timestamp: {
                                type: 'int64',
                                id: 1,
                              },
                            },
                          },
                          FastForwardResponse: {
                            fields: {
                              timestamp: {
                                type: 'int64',
                                id: 1,
                              },
                            },
                          },
                          FrontMoveRequest: {
                            fields: {
                              timestamp: {
                                type: 'int64',
                                id: 1,
                              },
                            },
                          },
                          FrontMoveResponse: {
                            fields: {
                              timestamp: {
                                type: 'int64',
                                id: 1,
                              },
                            },
                          },
                          GameCountdownResponse: {
                            fields: {
                              timestamp: {
                                type: 'int64',
                                id: 1,
                              },
                            },
                          },
                          GameStartRequest: {
                            fields: {
                              player: {
                                rule: 'required',
                                type: 'Player',
                                id: 1,
                              },
                            },
                          },
                          GameStartResponse: {
                            fields: {
                              code: {
                                rule: 'required',
                                type: 'Code',
                                id: 1,
                              },
                              senteAccid: {
                                rule: 'required',
                                type: 'string',
                                id: 2,
                              },
                              player: {
                                rule: 'repeated',
                                type: 'Player',
                                id: 3,
                              },
                            },
                          },
                          GameTimeResponse: {
                            fields: {
                              timestamp: {
                                type: 'int64',
                                id: 1,
                              },
                            },
                          },
                          GuessFirstRequest: {
                            fields: {
                              move: {
                                rule: 'required',
                                type: 'string',
                                id: 1,
                              },
                            },
                          },
                          GuessFirstResponse: {
                            fields: {
                              timestamp: {
                                type: 'int64',
                                id: 1,
                              },
                            },
                          },
                          HeartbeatRequest: {
                            fields: {
                              timestamp: {
                                type: 'int64',
                                id: 1,
                              },
                            },
                          },
                          HeartbeatResponse: {
                            fields: {
                              timestamp: {
                                type: 'int64',
                                id: 1,
                              },
                            },
                          },
                          NextMoveRequest: {
                            fields: {
                              timestamp: {
                                type: 'int64',
                                id: 1,
                              },
                            },
                          },
                          NextMoveResponse: {
                            fields: {
                              timestamp: {
                                type: 'int64',
                                id: 1,
                              },
                            },
                          },
                          PlayStoneRequest: {
                            fields: {
                              stone: {
                                rule: 'required',
                                type: 'string',
                                id: 1,
                              },
                            },
                          },
                          PlayStoneResponse: {
                            fields: {
                              stone: {
                                rule: 'required',
                                type: 'Stone',
                                id: 1,
                              },
                            },
                          },
                          Stone: {
                            fields: {
                              accid: {
                                rule: 'required',
                                type: 'string',
                                id: 1,
                              },
                              order: {
                                rule: 'required',
                                type: 'int32',
                                id: 2,
                              },
                              move: {
                                rule: 'required',
                                type: 'string',
                                id: 3,
                              },
                            },
                          },
                          PreMoveRequest: {
                            fields: {
                              timestamp: {
                                type: 'int64',
                                id: 1,
                              },
                            },
                          },
                          PreMoveResponse: {
                            fields: {
                              timestamp: {
                                type: 'int64',
                                id: 1,
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  pb: {
    nested: {
      Command: {
        values: {
          LOGIN_REQUEST: 0,
          LOGIN_RESPONSE: 1,
          HEARTBEAT_REQUEST: 2,
          HEARTBEAT_RESPONSE: 3,
          GUESS_FIRST_REQUEST: 4,
          GUESS_FIRST_RESPONSE: 5,
          GAME_START_REQUEST: 6,
          GAME_START_RESPONSE: 7,
          PLAY_STONE_REQUEST: 8,
          PLAY_STONE_RESPONSE: 9,
          AI_STEP_RESPONSE: 11,
          GAME_TIME_RESPONSE: 12,
          GAME_COUNTDOWN_RESPONSE: 13,
        },
      },
      Code: {
        fields: {
          code: {
            rule: 'required',
            type: 'int32',
            id: 1,
          },
          msg: {
            rule: 'required',
            type: 'string',
            id: 2,
          },
        },
      },
      Player: {
        fields: {
          accid: {
            rule: 'required',
            type: 'string',
            id: 1,
          },
          nickName: {
            rule: 'required',
            type: 'string',
            id: 2,
          },
          headImg: {
            rule: 'required',
            type: 'string',
            id: 3,
          },
          attrs: {
            type: 'string',
            id: 4,
          },
        },
      },
      LoginRequest: {
        fields: {
          imei: {
            type: 'string',
            id: 1,
          },
          deviceid: {
            type: 'string',
            id: 2,
          },
          accid: {
            rule: 'required',
            type: 'string',
            id: 3,
          },
          muid: {
            type: 'string',
            id: 4,
          },
          apptypeid: {
            rule: 'required',
            type: 'string',
            id: 5,
          },
          appcqid: {
            type: 'string',
            id: 6,
          },
          appqid: {
            type: 'string',
            id: 7,
          },
          appver: {
            type: 'string',
            id: 8,
          },
          appverint: {
            type: 'string',
            id: 9,
          },
          os: {
            type: 'string',
            id: 10,
          },
          osversion: {
            type: 'string',
            id: 11,
          },
          device: {
            type: 'string',
            id: 12,
          },
          devicebrand: {
            type: 'string',
            id: 13,
          },
          province: {
            type: 'string',
            id: 14,
          },
          city: {
            type: 'string',
            id: 15,
          },
          country: {
            type: 'string',
            id: 16,
          },
          pixel: {
            type: 'string',
            id: 17,
          },
          network: {
            type: 'string',
            id: 18,
          },
          istourist: {
            type: 'string',
            id: 19,
          },
          obatchid: {
            type: 'string',
            id: 20,
          },
          isyueyu: {
            type: 'string',
            id: 21,
          },
          aaid: {
            type: 'string',
            id: 22,
          },
          oaid: {
            type: 'string',
            id: 23,
          },
          appvers: {
            type: 'string',
            id: 24,
          },
          appversint: {
            type: 'string',
            id: 25,
          },
          lng: {
            type: 'string',
            id: 26,
          },
          lat: {
            type: 'string',
            id: 27,
          },
          srcqid: {
            type: 'string',
            id: 28,
          },
          srcplat: {
            type: 'string',
            id: 29,
          },
          userinfo: {
            type: 'string',
            id: 30,
          },
          lt: {
            rule: 'required',
            type: 'string',
            id: 31,
          },
        },
      },
      LoginResponse: {
        fields: {
          code: {
            rule: 'required',
            type: 'Code',
            id: 1,
          },
        },
      },
    },
  },
});

module.exports = $root;
