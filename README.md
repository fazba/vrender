# vrender
painting like html in canvas


# demo
```html
<group>
  <group name="typhoon" v-for="typhoon in typhoonList">
    <!-- 风圈 -->
    <group name="wind-circle">
      <group :name="wind-circle__7" v-for="wind in typhoon.windCircle">
        <sector name="sector-NW" :attr="wind[0]" />
        <sector name="sector-NE" :attr="wind[1]" />
        <sector name="sector-SW" :attr="wind[2]" />
        <sector name="sector-SE" :attr="wind[3]" />
      </group>
    </group>
    <!-- 实况路径 -->
    <group name="line-track">
      <!-- 采样点 -->
      <circle :attr="point.attr" v-for="point in typhoon.lineTrack.pointList" />
      <!-- 路径 -->
      <polyline :attr="typhoon.lineTrack.polyline"></polyline>
    </group>
    <!-- 预测路径 -->
    <group name="forecast-track">
      <!-- 采样点 -->
      <circle :attr="point.attr" v-for="point in typhoon.forecastTrack.pointList" />
      <!-- 路径 -->
      <polyline :attr="typhoon.forecastTrack.polyline"></polyline>
    </group>
  </group>
  <!-- 48小时警戒线文字 -->
  <text name="warnText48"></text>
  <!-- 24小时警戒线文字 -->
  <text name="warnText24"></text>
  <!-- 48小时警戒线 -->
  <polyline name="warnLine48"></polyline>
  <!-- 24小时警戒线 -->
  <polyline name="warnLine24"></polyline>
</group>
<script>
  const typhoonList = [
    {
      windCircle: [
        { name: 'wind-circle__7', color: 'rgba(53, 191, 30,0.5)', z: 1000, r: [1, 2, 3, 4] },
        { name: 'wind-circle__10', color: 'rgba(254, 156, 69,0.5)', z: 1010, r: [1, 2, 3, 4] },
        { name: 'wind-circle__12', color: 'rgba(254, 69, 224,0.5)', z: 1020, r: [1, 2, 3, 4] },
      ],
      lineTrack: {
        pointList: [
          {
            name: 'point',
            attr: {
              globalScaleRatio: 0,
              x,
              y,
              z,
              style: {
                fill,
                stroke: '#ffffff',
                lineWidth: 1
              },
              shape: {
                r: 4
              }
            }
          },
          {
            name: 'point',
            attr: {
              globalScaleRatio: 0,
              x,
              y,
              z,
              style: {
                fill,
                stroke: '#ffffff',
                lineWidth: 1
              },
              shape: {
                r: 5
              }
            }
          }
        ],
        polyline: {
          silent: true,
          z,
          style: {
            stroke,
            lineDash: lineDash || "solid",
            lineWidth: 2,
            strokeNoScale: true
          },
          shape: {
            points: [
              [50, 100],
              [190, 103]
            ]
          }
        }
      },
      forecastTrack: [
        {
          pointList: [
            {
              name: 'point',
              attr: {
                globalScaleRatio: 0,
                x,
                y,
                z,
                style: {
                  fill,
                  stroke: '#ffffff',
                  lineWidth: 1
                },
                shape: {
                  r: 4
                }
              }
            },
            {
              name: 'point',
              attr: {
                globalScaleRatio: 0,
                x,
                y,
                z,
                style: {
                  fill,
                  stroke: '#ffffff',
                  lineWidth: 1
                },
                shape: {
                  r: 5
                }
              }
            }
          ],
          polyline: {
            silent: true,
            z,
            style: {
              stroke,
              lineDash: lineDash || "solid",
              lineWidth: 2,
              strokeNoScale: true
            },
            shape: {
              points: [
                [50, 100],
                [190, 103]
              ]
            }
          }
        }
      ]
    }
  ]
</script>
```
