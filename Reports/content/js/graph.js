/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 489.0, "minX": 0.0, "maxY": 8085.0, "series": [{"data": [[0.0, 489.0], [0.1, 490.0], [0.2, 741.0], [0.3, 742.0], [0.4, 743.0], [0.5, 744.0], [0.6, 744.0], [0.7, 744.0], [0.8, 745.0], [0.9, 745.0], [1.0, 745.0], [1.1, 745.0], [1.2, 745.0], [1.3, 746.0], [1.4, 746.0], [1.5, 746.0], [1.6, 746.0], [1.7, 746.0], [1.8, 746.0], [1.9, 747.0], [2.0, 747.0], [2.1, 747.0], [2.2, 747.0], [2.3, 748.0], [2.4, 748.0], [2.5, 748.0], [2.6, 748.0], [2.7, 749.0], [2.8, 749.0], [2.9, 749.0], [3.0, 750.0], [3.1, 750.0], [3.2, 750.0], [3.3, 750.0], [3.4, 750.0], [3.5, 751.0], [3.6, 751.0], [3.7, 751.0], [3.8, 751.0], [3.9, 752.0], [4.0, 752.0], [4.1, 752.0], [4.2, 752.0], [4.3, 752.0], [4.4, 752.0], [4.5, 752.0], [4.6, 753.0], [4.7, 753.0], [4.8, 753.0], [4.9, 753.0], [5.0, 753.0], [5.1, 753.0], [5.2, 754.0], [5.3, 754.0], [5.4, 754.0], [5.5, 754.0], [5.6, 754.0], [5.7, 754.0], [5.8, 754.0], [5.9, 755.0], [6.0, 755.0], [6.1, 755.0], [6.2, 755.0], [6.3, 756.0], [6.4, 756.0], [6.5, 756.0], [6.6, 756.0], [6.7, 756.0], [6.8, 756.0], [6.9, 757.0], [7.0, 757.0], [7.1, 757.0], [7.2, 757.0], [7.3, 757.0], [7.4, 757.0], [7.5, 757.0], [7.6, 757.0], [7.7, 758.0], [7.8, 758.0], [7.9, 758.0], [8.0, 758.0], [8.1, 758.0], [8.2, 758.0], [8.3, 758.0], [8.4, 758.0], [8.5, 759.0], [8.6, 759.0], [8.7, 759.0], [8.8, 759.0], [8.9, 759.0], [9.0, 760.0], [9.1, 760.0], [9.2, 760.0], [9.3, 760.0], [9.4, 760.0], [9.5, 760.0], [9.6, 760.0], [9.7, 760.0], [9.8, 760.0], [9.9, 760.0], [10.0, 760.0], [10.1, 761.0], [10.2, 761.0], [10.3, 761.0], [10.4, 761.0], [10.5, 761.0], [10.6, 761.0], [10.7, 762.0], [10.8, 762.0], [10.9, 762.0], [11.0, 762.0], [11.1, 762.0], [11.2, 763.0], [11.3, 763.0], [11.4, 763.0], [11.5, 763.0], [11.6, 763.0], [11.7, 764.0], [11.8, 764.0], [11.9, 764.0], [12.0, 764.0], [12.1, 764.0], [12.2, 764.0], [12.3, 764.0], [12.4, 764.0], [12.5, 765.0], [12.6, 765.0], [12.7, 766.0], [12.8, 766.0], [12.9, 766.0], [13.0, 766.0], [13.1, 767.0], [13.2, 767.0], [13.3, 767.0], [13.4, 767.0], [13.5, 767.0], [13.6, 767.0], [13.7, 768.0], [13.8, 768.0], [13.9, 769.0], [14.0, 769.0], [14.1, 769.0], [14.2, 770.0], [14.3, 770.0], [14.4, 771.0], [14.5, 771.0], [14.6, 772.0], [14.7, 772.0], [14.8, 772.0], [14.9, 773.0], [15.0, 773.0], [15.1, 773.0], [15.2, 774.0], [15.3, 774.0], [15.4, 775.0], [15.5, 775.0], [15.6, 776.0], [15.7, 776.0], [15.8, 777.0], [15.9, 777.0], [16.0, 777.0], [16.1, 778.0], [16.2, 778.0], [16.3, 778.0], [16.4, 779.0], [16.5, 779.0], [16.6, 779.0], [16.7, 779.0], [16.8, 780.0], [16.9, 781.0], [17.0, 781.0], [17.1, 781.0], [17.2, 782.0], [17.3, 783.0], [17.4, 783.0], [17.5, 785.0], [17.6, 785.0], [17.7, 788.0], [17.8, 789.0], [17.9, 789.0], [18.0, 789.0], [18.1, 790.0], [18.2, 790.0], [18.3, 791.0], [18.4, 792.0], [18.5, 793.0], [18.6, 793.0], [18.7, 793.0], [18.8, 794.0], [18.9, 795.0], [19.0, 796.0], [19.1, 797.0], [19.2, 798.0], [19.3, 799.0], [19.4, 799.0], [19.5, 801.0], [19.6, 802.0], [19.7, 803.0], [19.8, 803.0], [19.9, 805.0], [20.0, 809.0], [20.1, 809.0], [20.2, 810.0], [20.3, 814.0], [20.4, 814.0], [20.5, 815.0], [20.6, 815.0], [20.7, 817.0], [20.8, 818.0], [20.9, 819.0], [21.0, 820.0], [21.1, 821.0], [21.2, 823.0], [21.3, 824.0], [21.4, 824.0], [21.5, 825.0], [21.6, 825.0], [21.7, 827.0], [21.8, 831.0], [21.9, 831.0], [22.0, 837.0], [22.1, 842.0], [22.2, 842.0], [22.3, 844.0], [22.4, 845.0], [22.5, 847.0], [22.6, 848.0], [22.7, 849.0], [22.8, 850.0], [22.9, 855.0], [23.0, 858.0], [23.1, 859.0], [23.2, 861.0], [23.3, 862.0], [23.4, 863.0], [23.5, 863.0], [23.6, 865.0], [23.7, 871.0], [23.8, 872.0], [23.9, 874.0], [24.0, 874.0], [24.1, 879.0], [24.2, 882.0], [24.3, 883.0], [24.4, 886.0], [24.5, 887.0], [24.6, 888.0], [24.7, 893.0], [24.8, 895.0], [24.9, 896.0], [25.0, 898.0], [25.1, 900.0], [25.2, 900.0], [25.3, 907.0], [25.4, 908.0], [25.5, 910.0], [25.6, 917.0], [25.7, 919.0], [25.8, 921.0], [25.9, 922.0], [26.0, 925.0], [26.1, 926.0], [26.2, 928.0], [26.3, 931.0], [26.4, 931.0], [26.5, 940.0], [26.6, 941.0], [26.7, 948.0], [26.8, 953.0], [26.9, 955.0], [27.0, 956.0], [27.1, 960.0], [27.2, 962.0], [27.3, 966.0], [27.4, 969.0], [27.5, 975.0], [27.6, 978.0], [27.7, 979.0], [27.8, 982.0], [27.9, 985.0], [28.0, 991.0], [28.1, 994.0], [28.2, 995.0], [28.3, 997.0], [28.4, 998.0], [28.5, 1001.0], [28.6, 1009.0], [28.7, 1014.0], [28.8, 1017.0], [28.9, 1019.0], [29.0, 1025.0], [29.1, 1028.0], [29.2, 1035.0], [29.3, 1035.0], [29.4, 1037.0], [29.5, 1056.0], [29.6, 1061.0], [29.7, 1062.0], [29.8, 1065.0], [29.9, 1075.0], [30.0, 1078.0], [30.1, 1082.0], [30.2, 1090.0], [30.3, 1091.0], [30.4, 1093.0], [30.5, 1100.0], [30.6, 1103.0], [30.7, 1131.0], [30.8, 1136.0], [30.9, 1140.0], [31.0, 1145.0], [31.1, 1160.0], [31.2, 1166.0], [31.3, 1169.0], [31.4, 1171.0], [31.5, 1179.0], [31.6, 1182.0], [31.7, 1186.0], [31.8, 1197.0], [31.9, 1199.0], [32.0, 1202.0], [32.1, 1205.0], [32.2, 1217.0], [32.3, 1221.0], [32.4, 1222.0], [32.5, 1227.0], [32.6, 1240.0], [32.7, 1240.0], [32.8, 1242.0], [32.9, 1245.0], [33.0, 1253.0], [33.1, 1257.0], [33.2, 1276.0], [33.3, 1278.0], [33.4, 1282.0], [33.5, 1284.0], [33.6, 1284.0], [33.7, 1300.0], [33.8, 1312.0], [33.9, 1316.0], [34.0, 1319.0], [34.1, 1322.0], [34.2, 1331.0], [34.3, 1346.0], [34.4, 1350.0], [34.5, 1352.0], [34.6, 1361.0], [34.7, 1364.0], [34.8, 1374.0], [34.9, 1382.0], [35.0, 1392.0], [35.1, 1396.0], [35.2, 1430.0], [35.3, 1434.0], [35.4, 1446.0], [35.5, 1460.0], [35.6, 1464.0], [35.7, 1479.0], [35.8, 1494.0], [35.9, 1504.0], [36.0, 1506.0], [36.1, 1509.0], [36.2, 1525.0], [36.3, 1526.0], [36.4, 1528.0], [36.5, 1540.0], [36.6, 1546.0], [36.7, 1565.0], [36.8, 1571.0], [36.9, 1581.0], [37.0, 1586.0], [37.1, 1596.0], [37.2, 1599.0], [37.3, 1629.0], [37.4, 1633.0], [37.5, 1639.0], [37.6, 1656.0], [37.7, 1683.0], [37.8, 1695.0], [37.9, 1703.0], [38.0, 1715.0], [38.1, 1721.0], [38.2, 1729.0], [38.3, 1733.0], [38.4, 1734.0], [38.5, 1736.0], [38.6, 1754.0], [38.7, 1754.0], [38.8, 1756.0], [38.9, 1761.0], [39.0, 1762.0], [39.1, 1773.0], [39.2, 1785.0], [39.3, 1785.0], [39.4, 1793.0], [39.5, 1805.0], [39.6, 1811.0], [39.7, 1813.0], [39.8, 1815.0], [39.9, 1817.0], [40.0, 1828.0], [40.1, 1838.0], [40.2, 1841.0], [40.3, 1855.0], [40.4, 1865.0], [40.5, 1865.0], [40.6, 1877.0], [40.7, 1883.0], [40.8, 1886.0], [40.9, 1890.0], [41.0, 1892.0], [41.1, 1893.0], [41.2, 1898.0], [41.3, 1901.0], [41.4, 1903.0], [41.5, 1905.0], [41.6, 1919.0], [41.7, 1925.0], [41.8, 1944.0], [41.9, 1952.0], [42.0, 1958.0], [42.1, 1970.0], [42.2, 1980.0], [42.3, 1984.0], [42.4, 1989.0], [42.5, 1999.0], [42.6, 2003.0], [42.7, 2009.0], [42.8, 2027.0], [42.9, 2033.0], [43.0, 2038.0], [43.1, 2041.0], [43.2, 2045.0], [43.3, 2049.0], [43.4, 2054.0], [43.5, 2066.0], [43.6, 2071.0], [43.7, 2075.0], [43.8, 2080.0], [43.9, 2081.0], [44.0, 2090.0], [44.1, 2090.0], [44.2, 2101.0], [44.3, 2115.0], [44.4, 2120.0], [44.5, 2135.0], [44.6, 2145.0], [44.7, 2155.0], [44.8, 2173.0], [44.9, 2181.0], [45.0, 2199.0], [45.1, 2211.0], [45.2, 2219.0], [45.3, 2220.0], [45.4, 2235.0], [45.5, 2237.0], [45.6, 2241.0], [45.7, 2261.0], [45.8, 2270.0], [45.9, 2275.0], [46.0, 2284.0], [46.1, 2298.0], [46.2, 2300.0], [46.3, 2304.0], [46.4, 2312.0], [46.5, 2316.0], [46.6, 2319.0], [46.7, 2322.0], [46.8, 2324.0], [46.9, 2339.0], [47.0, 2360.0], [47.1, 2366.0], [47.2, 2370.0], [47.3, 2379.0], [47.4, 2379.0], [47.5, 2383.0], [47.6, 2389.0], [47.7, 2390.0], [47.8, 2408.0], [47.9, 2425.0], [48.0, 2433.0], [48.1, 2442.0], [48.2, 2455.0], [48.3, 2456.0], [48.4, 2467.0], [48.5, 2487.0], [48.6, 2493.0], [48.7, 2494.0], [48.8, 2512.0], [48.9, 2513.0], [49.0, 2517.0], [49.1, 2524.0], [49.2, 2536.0], [49.3, 2563.0], [49.4, 2573.0], [49.5, 2587.0], [49.6, 2598.0], [49.7, 2608.0], [49.8, 2615.0], [49.9, 2626.0], [50.0, 2626.0], [50.1, 2629.0], [50.2, 2639.0], [50.3, 2642.0], [50.4, 2684.0], [50.5, 2700.0], [50.6, 2712.0], [50.7, 2727.0], [50.8, 2741.0], [50.9, 2744.0], [51.0, 2765.0], [51.1, 2771.0], [51.2, 2782.0], [51.3, 2794.0], [51.4, 2803.0], [51.5, 2810.0], [51.6, 2814.0], [51.7, 2817.0], [51.8, 2817.0], [51.9, 2825.0], [52.0, 2836.0], [52.1, 2839.0], [52.2, 2850.0], [52.3, 2853.0], [52.4, 2854.0], [52.5, 2858.0], [52.6, 2875.0], [52.7, 2876.0], [52.8, 2881.0], [52.9, 2897.0], [53.0, 2898.0], [53.1, 2904.0], [53.2, 2909.0], [53.3, 2916.0], [53.4, 2928.0], [53.5, 2937.0], [53.6, 2939.0], [53.7, 2955.0], [53.8, 2967.0], [53.9, 2980.0], [54.0, 2982.0], [54.1, 2986.0], [54.2, 3000.0], [54.3, 3001.0], [54.4, 3016.0], [54.5, 3023.0], [54.6, 3028.0], [54.7, 3040.0], [54.8, 3056.0], [54.9, 3070.0], [55.0, 3081.0], [55.1, 3088.0], [55.2, 3097.0], [55.3, 3133.0], [55.4, 3144.0], [55.5, 3151.0], [55.6, 3160.0], [55.7, 3161.0], [55.8, 3173.0], [55.9, 3185.0], [56.0, 3189.0], [56.1, 3201.0], [56.2, 3219.0], [56.3, 3223.0], [56.4, 3237.0], [56.5, 3247.0], [56.6, 3247.0], [56.7, 3260.0], [56.8, 3277.0], [56.9, 3279.0], [57.0, 3290.0], [57.1, 3310.0], [57.2, 3314.0], [57.3, 3322.0], [57.4, 3329.0], [57.5, 3335.0], [57.6, 3341.0], [57.7, 3351.0], [57.8, 3357.0], [57.9, 3365.0], [58.0, 3373.0], [58.1, 3380.0], [58.2, 3390.0], [58.3, 3394.0], [58.4, 3409.0], [58.5, 3416.0], [58.6, 3421.0], [58.7, 3441.0], [58.8, 3456.0], [58.9, 3463.0], [59.0, 3473.0], [59.1, 3477.0], [59.2, 3477.0], [59.3, 3481.0], [59.4, 3483.0], [59.5, 3495.0], [59.6, 3496.0], [59.7, 3499.0], [59.8, 3507.0], [59.9, 3508.0], [60.0, 3512.0], [60.1, 3515.0], [60.2, 3516.0], [60.3, 3531.0], [60.4, 3540.0], [60.5, 3550.0], [60.6, 3556.0], [60.7, 3562.0], [60.8, 3565.0], [60.9, 3576.0], [61.0, 3586.0], [61.1, 3588.0], [61.2, 3593.0], [61.3, 3609.0], [61.4, 3609.0], [61.5, 3613.0], [61.6, 3616.0], [61.7, 3627.0], [61.8, 3648.0], [61.9, 3654.0], [62.0, 3654.0], [62.1, 3657.0], [62.2, 3665.0], [62.3, 3665.0], [62.4, 3674.0], [62.5, 3683.0], [62.6, 3688.0], [62.7, 3701.0], [62.8, 3714.0], [62.9, 3725.0], [63.0, 3729.0], [63.1, 3741.0], [63.2, 3750.0], [63.3, 3756.0], [63.4, 3761.0], [63.5, 3762.0], [63.6, 3765.0], [63.7, 3766.0], [63.8, 3774.0], [63.9, 3786.0], [64.0, 3795.0], [64.1, 3796.0], [64.2, 3811.0], [64.3, 3827.0], [64.4, 3829.0], [64.5, 3838.0], [64.6, 3844.0], [64.7, 3860.0], [64.8, 3868.0], [64.9, 3878.0], [65.0, 3879.0], [65.1, 3883.0], [65.2, 3887.0], [65.3, 3890.0], [65.4, 3894.0], [65.5, 3904.0], [65.6, 3905.0], [65.7, 3916.0], [65.8, 3923.0], [65.9, 3924.0], [66.0, 3935.0], [66.1, 3972.0], [66.2, 3975.0], [66.3, 3985.0], [66.4, 3988.0], [66.5, 3990.0], [66.6, 4001.0], [66.7, 4006.0], [66.8, 4008.0], [66.9, 4013.0], [67.0, 4016.0], [67.1, 4019.0], [67.2, 4023.0], [67.3, 4032.0], [67.4, 4034.0], [67.5, 4044.0], [67.6, 4049.0], [67.7, 4049.0], [67.8, 4050.0], [67.9, 4061.0], [68.0, 4063.0], [68.1, 4067.0], [68.2, 4073.0], [68.3, 4080.0], [68.4, 4087.0], [68.5, 4099.0], [68.6, 4106.0], [68.7, 4117.0], [68.8, 4122.0], [68.9, 4123.0], [69.0, 4136.0], [69.1, 4137.0], [69.2, 4138.0], [69.3, 4144.0], [69.4, 4154.0], [69.5, 4155.0], [69.6, 4156.0], [69.7, 4159.0], [69.8, 4160.0], [69.9, 4169.0], [70.0, 4181.0], [70.1, 4183.0], [70.2, 4189.0], [70.3, 4200.0], [70.4, 4200.0], [70.5, 4212.0], [70.6, 4232.0], [70.7, 4233.0], [70.8, 4242.0], [70.9, 4251.0], [71.0, 4251.0], [71.1, 4263.0], [71.2, 4271.0], [71.3, 4289.0], [71.4, 4310.0], [71.5, 4313.0], [71.6, 4318.0], [71.7, 4322.0], [71.8, 4333.0], [71.9, 4336.0], [72.0, 4345.0], [72.1, 4361.0], [72.2, 4364.0], [72.3, 4373.0], [72.4, 4376.0], [72.5, 4381.0], [72.6, 4391.0], [72.7, 4419.0], [72.8, 4426.0], [72.9, 4456.0], [73.0, 4474.0], [73.1, 4478.0], [73.2, 4484.0], [73.3, 4496.0], [73.4, 4499.0], [73.5, 4503.0], [73.6, 4516.0], [73.7, 4519.0], [73.8, 4523.0], [73.9, 4527.0], [74.0, 4530.0], [74.1, 4535.0], [74.2, 4537.0], [74.3, 4538.0], [74.4, 4548.0], [74.5, 4579.0], [74.6, 4593.0], [74.7, 4631.0], [74.8, 4644.0], [74.9, 4654.0], [75.0, 4660.0], [75.1, 4664.0], [75.2, 4679.0], [75.3, 4688.0], [75.4, 4700.0], [75.5, 4711.0], [75.6, 4736.0], [75.7, 4757.0], [75.8, 4758.0], [75.9, 4763.0], [76.0, 4778.0], [76.1, 4783.0], [76.2, 4788.0], [76.3, 4791.0], [76.4, 4795.0], [76.5, 4823.0], [76.6, 4845.0], [76.7, 4845.0], [76.8, 4870.0], [76.9, 4871.0], [77.0, 4873.0], [77.1, 4891.0], [77.2, 4902.0], [77.3, 4903.0], [77.4, 4909.0], [77.5, 4922.0], [77.6, 4926.0], [77.7, 4947.0], [77.8, 4964.0], [77.9, 4966.0], [78.0, 4975.0], [78.1, 4984.0], [78.2, 4988.0], [78.3, 4992.0], [78.4, 5005.0], [78.5, 5006.0], [78.6, 5008.0], [78.7, 5014.0], [78.8, 5022.0], [78.9, 5025.0], [79.0, 5027.0], [79.1, 5031.0], [79.2, 5044.0], [79.3, 5063.0], [79.4, 5070.0], [79.5, 5078.0], [79.6, 5100.0], [79.7, 5104.0], [79.8, 5144.0], [79.9, 5155.0], [80.0, 5158.0], [80.1, 5167.0], [80.2, 5184.0], [80.3, 5188.0], [80.4, 5192.0], [80.5, 5197.0], [80.6, 5200.0], [80.7, 5210.0], [80.8, 5213.0], [80.9, 5214.0], [81.0, 5229.0], [81.1, 5253.0], [81.2, 5257.0], [81.3, 5274.0], [81.4, 5277.0], [81.5, 5281.0], [81.6, 5287.0], [81.7, 5298.0], [81.8, 5298.0], [81.9, 5330.0], [82.0, 5336.0], [82.1, 5339.0], [82.2, 5342.0], [82.3, 5354.0], [82.4, 5362.0], [82.5, 5367.0], [82.6, 5383.0], [82.7, 5386.0], [82.8, 5401.0], [82.9, 5403.0], [83.0, 5406.0], [83.1, 5412.0], [83.2, 5420.0], [83.3, 5421.0], [83.4, 5427.0], [83.5, 5429.0], [83.6, 5431.0], [83.7, 5436.0], [83.8, 5456.0], [83.9, 5459.0], [84.0, 5473.0], [84.1, 5491.0], [84.2, 5494.0], [84.3, 5499.0], [84.4, 5507.0], [84.5, 5517.0], [84.6, 5524.0], [84.7, 5536.0], [84.8, 5538.0], [84.9, 5547.0], [85.0, 5570.0], [85.1, 5575.0], [85.2, 5590.0], [85.3, 5597.0], [85.4, 5598.0], [85.5, 5629.0], [85.6, 5650.0], [85.7, 5652.0], [85.8, 5665.0], [85.9, 5678.0], [86.0, 5695.0], [86.1, 5709.0], [86.2, 5734.0], [86.3, 5738.0], [86.4, 5759.0], [86.5, 5760.0], [86.6, 5763.0], [86.7, 5768.0], [86.8, 5791.0], [86.9, 5791.0], [87.0, 5820.0], [87.1, 5839.0], [87.2, 5842.0], [87.3, 5844.0], [87.4, 5847.0], [87.5, 5863.0], [87.6, 5867.0], [87.7, 5876.0], [87.8, 5886.0], [87.9, 5904.0], [88.0, 5932.0], [88.1, 5935.0], [88.2, 5944.0], [88.3, 5949.0], [88.4, 5953.0], [88.5, 5971.0], [88.6, 6001.0], [88.7, 6005.0], [88.8, 6042.0], [88.9, 6120.0], [89.0, 6135.0], [89.1, 6144.0], [89.2, 6161.0], [89.3, 6176.0], [89.4, 6178.0], [89.5, 6189.0], [89.6, 6202.0], [89.7, 6206.0], [89.8, 6249.0], [89.9, 6263.0], [90.0, 6303.0], [90.1, 6312.0], [90.2, 6319.0], [90.3, 6325.0], [90.4, 6328.0], [90.5, 6344.0], [90.6, 6388.0], [90.7, 6399.0], [90.8, 6407.0], [90.9, 6422.0], [91.0, 6441.0], [91.1, 6472.0], [91.2, 6479.0], [91.3, 6499.0], [91.4, 6501.0], [91.5, 6502.0], [91.6, 6507.0], [91.7, 6507.0], [91.8, 6521.0], [91.9, 6536.0], [92.0, 6538.0], [92.1, 6554.0], [92.2, 6572.0], [92.3, 6572.0], [92.4, 6580.0], [92.5, 6594.0], [92.6, 6598.0], [92.7, 6608.0], [92.8, 6612.0], [92.9, 6629.0], [93.0, 6636.0], [93.1, 6649.0], [93.2, 6654.0], [93.3, 6672.0], [93.4, 6676.0], [93.5, 6680.0], [93.6, 6682.0], [93.7, 6700.0], [93.8, 6700.0], [93.9, 6710.0], [94.0, 6719.0], [94.1, 6723.0], [94.2, 6723.0], [94.3, 6749.0], [94.4, 6758.0], [94.5, 6762.0], [94.6, 6796.0], [94.7, 6806.0], [94.8, 6828.0], [94.9, 6849.0], [95.0, 6849.0], [95.1, 6852.0], [95.2, 6859.0], [95.3, 6864.0], [95.4, 6876.0], [95.5, 6896.0], [95.6, 6901.0], [95.7, 6908.0], [95.8, 6911.0], [95.9, 6915.0], [96.0, 6928.0], [96.1, 6947.0], [96.2, 6955.0], [96.3, 6958.0], [96.4, 6967.0], [96.5, 6982.0], [96.6, 6994.0], [96.7, 6999.0], [96.8, 6999.0], [96.9, 7002.0], [97.0, 7014.0], [97.1, 7046.0], [97.2, 7052.0], [97.3, 7075.0], [97.4, 7080.0], [97.5, 7099.0], [97.6, 7109.0], [97.7, 7109.0], [97.8, 7150.0], [97.9, 7180.0], [98.0, 7189.0], [98.1, 7209.0], [98.2, 7215.0], [98.3, 7232.0], [98.4, 7255.0], [98.5, 7297.0], [98.6, 7333.0], [98.7, 7341.0], [98.8, 7363.0], [98.9, 7369.0], [99.0, 7380.0], [99.1, 7396.0], [99.2, 7427.0], [99.3, 7444.0], [99.4, 7466.0], [99.5, 7484.0], [99.6, 7537.0], [99.7, 7554.0], [99.8, 7658.0], [99.9, 7912.0]], "isOverall": false, "label": "User Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 321.0, "series": [{"data": [[700.0, 321.0], [800.0, 94.0], [900.0, 56.0], [1000.0, 34.0], [1100.0, 25.0], [1200.0, 28.0], [1300.0, 24.0], [1400.0, 12.0], [1500.0, 23.0], [1600.0, 10.0], [1700.0, 28.0], [1800.0, 30.0], [1900.0, 21.0], [2000.0, 26.0], [2100.0, 15.0], [2200.0, 19.0], [2300.0, 26.0], [2400.0, 17.0], [2500.0, 15.0], [2600.0, 14.0], [2700.0, 15.0], [2800.0, 28.0], [2900.0, 18.0], [3000.0, 18.0], [3100.0, 14.0], [3200.0, 16.0], [3300.0, 22.0], [3400.0, 23.0], [3500.0, 25.0], [3600.0, 24.0], [3700.0, 24.0], [3800.0, 23.0], [3900.0, 18.0], [4000.0, 33.0], [4200.0, 17.0], [4300.0, 23.0], [4100.0, 29.0], [4400.0, 12.0], [4500.0, 21.0], [4600.0, 12.0], [4800.0, 13.0], [4700.0, 17.0], [5000.0, 21.0], [5100.0, 16.0], [4900.0, 19.0], [5300.0, 15.0], [5200.0, 22.0], [5500.0, 18.0], [5400.0, 26.0], [5600.0, 10.0], [5700.0, 15.0], [5800.0, 15.0], [5900.0, 13.0], [6100.0, 11.0], [6000.0, 5.0], [6200.0, 7.0], [6300.0, 13.0], [6400.0, 10.0], [6500.0, 21.0], [6600.0, 18.0], [6900.0, 21.0], [6700.0, 16.0], [6800.0, 15.0], [7000.0, 12.0], [7100.0, 9.0], [7200.0, 8.0], [7300.0, 10.0], [7400.0, 7.0], [7600.0, 2.0], [7500.0, 3.0], [7900.0, 1.0], [8000.0, 1.0], [400.0, 2.0], [500.0, 1.0]], "isOverall": false, "label": "User Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8000.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 4.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1069.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 593.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1069.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 4.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 3.189542483660131, "minX": 1.68573684E12, "maxY": 18.572289156626507, "series": [{"data": [[1.68573732E12, 5.284023668639055], [1.68573702E12, 18.572289156626507], [1.68573696E12, 9.251533742331294], [1.68573744E12, 3.189542483660131], [1.68573714E12, 7.651162790697669], [1.68573684E12, 12.2], [1.68573708E12, 15.911242603550303], [1.6857369E12, 9.430303030303033], [1.68573726E12, 7.412790697674425], [1.6857372E12, 9.193939393939386], [1.68573738E12, 3.323353293413174]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68573744E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 757.0, "minX": 1.0, "maxY": 7451.333333333333, "series": [{"data": [[8.0, 2696.7812500000005], [2.0, 757.0], [9.0, 3071.5468750000005], [10.0, 3432.385542168675], [11.0, 3803.2676056338037], [12.0, 4116.4285714285725], [3.0, 828.0389344262294], [13.0, 4459.753623188405], [14.0, 4856.115384615384], [15.0, 5222.1558441558445], [16.0, 5523.262295081967], [4.0, 1189.6170212765958], [1.0, 2211.0], [17.0, 6002.422222222222], [18.0, 6334.792452830187], [19.0, 6700.15625], [5.0, 1610.446153846154], [20.0, 7077.68085106383], [21.0, 6253.416666666666], [22.0, 7451.333333333333], [6.0, 1975.662921348314], [7.0, 2326.8309859154933]], "isOverall": false, "label": "User Request", "isController": false}, {"data": [[8.968187274909948, 3018.015006002403]], "isOverall": false, "label": "User Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 22.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 11.166666666666666, "minX": 1.68573684E12, "maxY": 4478.366666666667, "series": [{"data": [[1.68573732E12, 4422.15], [1.68573702E12, 4394.666666666667], [1.68573696E12, 4238.616666666667], [1.68573744E12, 3978.5666666666666], [1.68573714E12, 4470.816666666667], [1.68573684E12, 130.1], [1.68573708E12, 4397.8], [1.6857369E12, 4286.4], [1.68573726E12, 4478.366666666667], [1.6857372E12, 4290.016666666666], [1.68573738E12, 4346.05]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68573732E12, 375.2], [1.68573702E12, 364.03333333333336], [1.68573696E12, 364.03333333333336], [1.68573744E12, 341.7], [1.68573714E12, 384.1333333333333], [1.68573684E12, 11.166666666666666], [1.68573708E12, 377.43333333333334], [1.6857369E12, 368.5], [1.68573726E12, 384.1333333333333], [1.6857372E12, 368.5], [1.68573738E12, 372.96666666666664]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68573744E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 890.3464052287583, "minX": 1.68573684E12, "maxY": 6471.614457831325, "series": [{"data": [[1.68573732E12, 1679.3609467455624], [1.68573702E12, 6471.614457831325], [1.68573696E12, 3129.3190184049085], [1.68573744E12, 890.3464052287583], [1.68573714E12, 2556.046511627909], [1.68573684E12, 3940.4], [1.68573708E12, 5559.147928994083], [1.6857369E12, 3213.363636363635], [1.68573726E12, 2450.8313953488373], [1.6857372E12, 3111.254545454544], [1.68573738E12, 956.0958083832336]], "isOverall": false, "label": "User Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68573744E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 890.3071895424836, "minX": 1.68573684E12, "maxY": 6459.210843373494, "series": [{"data": [[1.68573732E12, 1676.4142011834317], [1.68573702E12, 6459.210843373494], [1.68573696E12, 3129.251533742332], [1.68573744E12, 890.3071895424836], [1.68573714E12, 2555.988372093024], [1.68573684E12, 3938.0], [1.68573708E12, 5559.118343195266], [1.6857369E12, 3213.30303030303], [1.68573726E12, 2450.779069767442], [1.6857372E12, 3111.1757575757556], [1.68573738E12, 956.077844311377]], "isOverall": false, "label": "User Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68573744E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 507.60355029585793, "minX": 1.68573684E12, "maxY": 1017.0, "series": [{"data": [[1.68573732E12, 507.60355029585793], [1.68573702E12, 536.2590361445777], [1.68573696E12, 544.4723926380368], [1.68573744E12, 510.92810457516333], [1.68573714E12, 525.4360465116275], [1.68573684E12, 1017.0], [1.68573708E12, 510.96449704142026], [1.6857369E12, 520.3454545454547], [1.68573726E12, 519.8837209302327], [1.6857372E12, 536.5030303030302], [1.68573738E12, 524.9700598802394]], "isOverall": false, "label": "User Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68573744E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 741.0, "minX": 1.68573684E12, "maxY": 8085.0, "series": [{"data": [[1.68573732E12, 4788.0], [1.68573702E12, 7912.0], [1.68573696E12, 5695.0], [1.68573744E12, 2211.0], [1.68573714E12, 4964.0], [1.68573684E12, 4309.0], [1.68573708E12, 8085.0], [1.6857369E12, 5948.0], [1.68573726E12, 6309.0], [1.6857372E12, 5791.0], [1.68573738E12, 1905.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68573732E12, 3594.6], [1.68573702E12, 7279.0], [1.68573696E12, 4942.199999999999], [1.68573744E12, 1247.8], [1.68573714E12, 3850.1000000000004], [1.68573684E12, 4309.0], [1.68573708E12, 6859.0], [1.6857369E12, 5055.2], [1.68573726E12, 5493.100000000002], [1.6857372E12, 4902.4], [1.68573738E12, 1349.6000000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68573732E12, 4702.4400000000005], [1.68573702E12, 7749.439999999996], [1.68573696E12, 5627.159999999998], [1.68573744E12, 2151.600000000001], [1.68573714E12, 4936.26], [1.68573684E12, 4309.0], [1.68573708E12, 7787.500000000005], [1.6857369E12, 5676.080000000002], [1.68573726E12, 6171.030000000002], [1.6857372E12, 5534.920000000001], [1.68573738E12, 1894.8]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68573732E12, 4124.949999999999], [1.68573702E12, 7429.599999999999], [1.68573696E12, 5393.799999999999], [1.68573744E12, 1824.8999999999992], [1.68573714E12, 4483.049999999998], [1.68573684E12, 4309.0], [1.68573708E12, 7345.5], [1.6857369E12, 5347.699999999999], [1.68573726E12, 5792.05], [1.6857372E12, 5151.7], [1.68573738E12, 1543.3999999999996]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.68573732E12, 744.0], [1.68573702E12, 742.0], [1.68573696E12, 750.0], [1.68573744E12, 741.0], [1.68573714E12, 751.0], [1.68573684E12, 3586.0], [1.68573708E12, 3233.0], [1.6857369E12, 745.0], [1.68573726E12, 744.0], [1.6857372E12, 760.0], [1.68573738E12, 745.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68573732E12, 1015.0], [1.68573702E12, 6696.0], [1.68573696E12, 3473.0], [1.68573744E12, 772.0], [1.68573714E12, 2461.5], [1.68573684E12, 3920.0], [1.68573708E12, 5449.0], [1.6857369E12, 3766.0], [1.68573726E12, 1421.0], [1.6857372E12, 3161.0], [1.68573738E12, 827.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68573744E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 490.0, "minX": 1.0, "maxY": 4844.5, "series": [{"data": [[2.0, 2811.5], [4.0, 2816.0], [1.0, 3516.0], [8.0, 2836.0], [9.0, 3552.5], [5.0, 3882.5], [10.0, 4844.5], [11.0, 2629.0], [3.0, 1222.5], [6.0, 3703.0], [13.0, 4538.0], [7.0, 2237.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[4.0, 502.0], [3.0, 490.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 13.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 4844.5, "series": [{"data": [[2.0, 2811.5], [4.0, 2816.0], [1.0, 3516.0], [8.0, 2836.0], [9.0, 3552.5], [5.0, 3882.5], [10.0, 4844.5], [11.0, 2629.0], [3.0, 1222.5], [6.0, 3703.0], [13.0, 4538.0], [7.0, 2237.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[4.0, 0.0], [3.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 13.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.25, "minX": 1.68573684E12, "maxY": 2.783333333333333, "series": [{"data": [[1.68573732E12, 2.783333333333333], [1.68573702E12, 2.7666666666666666], [1.68573696E12, 2.783333333333333], [1.68573744E12, 2.5166666666666666], [1.68573714E12, 2.783333333333333], [1.68573684E12, 0.25], [1.68573708E12, 2.783333333333333], [1.6857369E12, 2.783333333333333], [1.68573726E12, 2.783333333333333], [1.6857372E12, 2.7666666666666666], [1.68573738E12, 2.7666666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68573744E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.68573684E12, "maxY": 2.8666666666666667, "series": [{"data": [[1.68573732E12, 2.8], [1.68573702E12, 2.716666666666667], [1.68573696E12, 2.716666666666667], [1.68573744E12, 2.55], [1.68573714E12, 2.8666666666666667], [1.68573684E12, 0.08333333333333333], [1.68573708E12, 2.816666666666667], [1.6857369E12, 2.75], [1.68573726E12, 2.8666666666666667], [1.6857372E12, 2.75], [1.68573738E12, 2.783333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.68573732E12, 0.016666666666666666], [1.68573702E12, 0.05]], "isOverall": false, "label": "Non HTTP response code: javax.net.ssl.SSLHandshakeException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68573744E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.68573684E12, "maxY": 2.8666666666666667, "series": [{"data": [[1.68573732E12, 2.8], [1.68573702E12, 2.716666666666667], [1.68573696E12, 2.716666666666667], [1.68573744E12, 2.55], [1.68573714E12, 2.8666666666666667], [1.68573684E12, 0.08333333333333333], [1.68573708E12, 2.816666666666667], [1.6857369E12, 2.75], [1.68573726E12, 2.8666666666666667], [1.6857372E12, 2.75], [1.68573738E12, 2.783333333333333]], "isOverall": false, "label": "User Request-success", "isController": false}, {"data": [[1.68573732E12, 0.016666666666666666], [1.68573702E12, 0.05]], "isOverall": false, "label": "User Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68573744E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.68573684E12, "maxY": 2.8666666666666667, "series": [{"data": [[1.68573732E12, 2.8], [1.68573702E12, 2.716666666666667], [1.68573696E12, 2.716666666666667], [1.68573744E12, 2.55], [1.68573714E12, 2.8666666666666667], [1.68573684E12, 0.08333333333333333], [1.68573708E12, 2.816666666666667], [1.6857369E12, 2.75], [1.68573726E12, 2.8666666666666667], [1.6857372E12, 2.75], [1.68573738E12, 2.783333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.68573732E12, 0.016666666666666666], [1.68573702E12, 0.05]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68573744E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

