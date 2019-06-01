/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-location': '&#xe947;',
		'icon-location2': '&#xe948;',
		'icon-arrow-up-left2': '&#xea39;',
		'icon-arrow-up2': '&#xea3a;',
		'icon-arrow-up-right2': '&#xea3b;',
		'icon-arrow-right2': '&#xea3c;',
		'icon-arrow-down-right2': '&#xea3d;',
		'icon-arrow-down2': '&#xea3e;',
		'icon-arrow-down-left2': '&#xea3f;',
		'icon-arrow-left2': '&#xea40;',
		'icon-circle-up': '&#xea41;',
		'icon-circle-right': '&#xea42;',
		'icon-circle-down': '&#xea43;',
		'icon-circle-left': '&#xea44;',
		'icon-ctrl': '&#xea50;',
		'icon-search': '&#xe986;',
		'icon-cart': '&#xe93a;',
		'icon-play': '&#xe912;',
		'icon-folder-plus': '&#xe931;',
		'icon-cart1': '&#xe93b;',
		'icon-location1': '&#xe949;',
		'icon-location21': '&#xe94a;',
		'icon-fire': '&#xe9a9;',
		'icon-cloud-check': '&#xe9c4;',
		'icon-download2': '&#xe9c5;',
		'icon-plus': '&#xea0a;',
		'icon-minus': '&#xea0b;',
		'icon-cancel-circle': '&#xea0d;',
		'icon-blocked': '&#xea0e;',
		'icon-cross': '&#xea0f;',
		'icon-checkmark': '&#xea10;',
		'icon-play2': '&#xea15;',
		'icon-pause2': '&#xea1d;',
		'icon-stop2': '&#xea1e;',
		'icon-mail': '&#xea83;',
		'icon-google': '&#xea88;',
		'icon-youtube2': '&#xea9e;',
		'icon-steam2': '&#xeaad;',
		'icon-android': '&#xeac0;',
		'icon-windows': '&#xeac1;',
		'icon-chrome': '&#xead9;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
