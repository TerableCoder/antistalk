module.exports = function blockContinent(d){
	let ENABLED = true;
	d.hook('C_VISIT_NEW_SECTION',1,e=>{return ENABLED;});
	d.command.add('antistalk',()=>{
		ENABLED = !ENABLED;
		d.command.message('Anti-stalking is '+((!ENABLED)?'enabled':'disabled'));
	});
}