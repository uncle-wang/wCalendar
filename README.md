# wCalendar
a calendar plugin

wCalendar依赖于jQuery库

一、静态方法：

1. wCalendar.init(element[, callback]);

//初始化实例。element(必须): jQuery元素对象，被初始化的元素。初始化后，点击该元素可弹出日历界面，callback(可选): 回调函数(设置日历时间时执行)。var callback = function(startDate, endDate) { console.log(startDate, endDate); }; var calendar = wCalendar.init($('div#calendar_div'), callback);

2. wCalendar.setColor(color);

//设置颜色。color(必须): 十六进制格式，三位或六位字符串，设置成功返回wCalendar对象，失败返回false。如var calendar = wCalendar.setColor('000').init(element[, callback])。

二、实例方法：

calendar = {

	show(),
	//显示日历
	
	hide(),
	//隐藏日历

	single(),
	//日历以单个模式显示

	double(),
	//日历以双个模式显示
	
	setTime(a, b[, c, d, e, f]),
	//设置日历时间；可传入两个13位时间戳格式的参数或六个年月日的组合，如setTime(1466352000000, 1466438399000)，或setTime(2015,1,2,2015,12,20);设置成功返回true，失败返回false

	getTime([type]),
	//获取日历时间；返回包含startTime和endTime两个属性的对象，type参数可选，当type的值为number类型时，返回13位时间戳格式，当type的值为string类型时，返回八位长度的字符串，并以type的值作为分隔符，不传参数及传入其他值返回Date对象
	
	setMode(mode),
	//设置日历的模式；mode参数必填，可能的值为1、2、3，1位日期模式，2为星期模式，3为月份模式
	
	setTitle([startTitle[, endTitle]]),
	//设置日历标题，参数可选，格式为字符串，只传入一个参数时设置开始日历的标题，传入的值为空字符串时，不设置对应的标题，如calendar.setTitle('', 'demo')，将只设置结束日历(右半部分)的标题
}

三、用例：

	var $j = jQuery.noConflict();

	$j(document).ready(function() {

		var ele = $j('#test');

		var callback = function(startDate, endDate) {

			console.log(startDate, endDate);
		}

		var calendar = wCalendar.init(ele, callback);
		calendar.setDate(1432137600000, 1498838400000);
		console.log(calendar.getTime('-').startTime, calendar.getTime().endTime.getFullYear());
	});