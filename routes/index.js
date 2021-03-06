var express = require('express');
var router = express.Router();
var data = require('./data')
var obj={"info":[
              { "longitude": 116.981344, "latitude": 36.679841, "shopname": "碧丽姿","addr":"山东省济南市天桥区堤口路102 ","tel":"" },
              { "longitude": 117.020961, "latitude": 36.62588, "shopname": "碧丽姿脂肪管理中心","addr":"八里洼路13-2号 ","tel":"(0531)82566600" },
              { "longitude": 116.089595, "latitude": 36.660266, "shopname": "碧丽姿脂肪管理中心(中润店)","addr":"窑头路中润世纪城北门1楼A-33（窑头路与浆水泉路交叉口西300米） ","tel":"(0531)67873867" },
              { "longitude": 116.998297, "latitude": 36.658693, "shopname": "碧丽姿脂肪管理中心(市委店)","addr":"建国小经三路与纬四路交叉口西50米路北 ","tel":"(0531)67873868" },
              { "longitude": 117.096969, "latitude": 36.687543, "shopname": "碧丽姿脂肪管理中心连锁(NO.005)","addr":"华龙路399-27 ","tel":"(0531)67873680" },
              { "longitude": 117.06974, "latitude": 36.689908, "shopname": "碧丽姿美容有限公司","addr":"济南市历城区花园路101号海蔚广场商务大厦24层 ","tel":"" },
              { "longitude": 117.132518, "latitude": 36.695635, "shopname": "碧丽姿脂肪管理中心","addr":"山东省济南市历下区康虹路846 ","tel":"" },
              { "longitude": 117.01752, "latitude": 36.618581, "shopname": "碧丽姿脂肪管理中心(玉函店)","addr":"玉函北区商业街46号2楼门头房（玉函小区北路与玉兴路交叉口东南角） ","tel":"(0531)67873863" },
              { "longitude": 116.981042, "latitude": 36.679793, "shopname": "碧丽姿脂肪管理中心(堤口店)","addr":"堤口路98号鲁铁花样年华123公建206号商铺（矿院路与堤口路交叉口西行50米路南） ","tel":"(0531)67873865" },
              { "longitude": 117.056792, "latitude": 36.64546, "shopname": "碧丽姿脂肪管理中心(燕翔路店)","addr":"燕翔路10-20号 ","tel":"(0531)67873861" },
              { "longitude": 117.010009, "latitude": 36.595303, "shopname": "  碧丽姿脂肪管理中心（领秀城店）","addr":"市中区鲁能领秀城D街区15号楼2单元102室底商铺 ","tel":"(0531)67873862" },
              { "longitude": 116.988373, "latitude": 36.64574, "shopname": "碧丽姿脂肪管理中心(阳光100店)","addr":"阳光新路19号阳光100国际新城T2-1-2604室(美乐汇楼上26层) ","tel":"(0531)67873869" },
              { "longitude": 117.098113, "latitude": 36.687555, "shopname": "碧丽姿脂肪管理中心(华龙路店)","addr":"华龙路新龙家园门面房5号楼5单元101.102（华龙路与华阳路交叉口西北角）","tel":"(0531)67873860"}
        ]
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/data', function(req, res, next) {
  // res.send('index', data

  // );
  res.send(obj);
});

module.exports = router;
