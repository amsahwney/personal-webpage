(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"sitINKY_atlas_1", frames: [[0,0,911,894]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_1 = function() {
	this.initialize(ss["sitINKY_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.eyes = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// eye_outline
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(7,1,1).p("AOJBRQAAEHhsC6QhrC6iYAAQiYAAhsi6Qhri6AAkHQAAkGBri6QBsi6CYAAQCYAABrC6QBsC6AAEGgAglhHQADEMh+DAQh7DAi0ACQizACiCi8QiAi9gDkMQgDkNB7jAQB+jACzgCQC0gCCAC8QCCC8ADEOg");
	this.shape.setTransform(95.4464,76.5734);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

	// eyes_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AEWISQhri6AAkHQAAkGBri6QBsi6CYAAQCYAABrC6QBsC6AAEGQAAEHhsC6QhrC6iYAAQiYAAhsi6gAsEGNQiAi9gDkMQgDkNB7jAQB+jACzgCQC0gCCAC8QCCC8ADEOQADEMh+DAQh7DAi0ACIgEAAQixAAiAi6g");
	mask.setTransform(95.4464,76.5734);

	// eyelid
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(7,1,1).p("AvFmNIPyAAIAAJZIvyAAgAAtjLIOZAAIAAJZIuZAAg");
	this.shape_1.setTransform(92.3,-24.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAtGOIAApZIOZAAIAAJZgAvFDMIAApZIPyAAIAAJZg");
	this.shape_2.setTransform(92.3,-24.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#333333").ss(7,1,1).p("AAtlEIOZAAIAAL3QnCCWnXiWgAvFn9IPyAAIAAL3QntCEoFiEg");
	this.shape_3.setTransform(92.3,-0.2375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAtGzIAAr3IOZAAIAAL3QjhBLjmAAQjnAAjrhLgAvFD6IAAr3IPyAAIAAL3Qj3BCj8AAQj9AAkChCg");
	this.shape_4.setTransform(92.3,-0.2375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#333333").ss(7,1,1).p("AAtm9IOZAAIAAOVQm4EsnhksgAvFptIPyAAIAAOVQnjEJoPkJg");
	this.shape_5.setTransform(92.3,24.2125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAtHYIAAuVIOZAAIAAOVQjcCWjmAAQjnAAjwiWgAvFEoIAAuVIPyAAIAAOVQjxCEj9AAQj9AAkHiEg");
	this.shape_6.setTransform(92.3,24.2125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#333333").ss(7,1,1).p("AAto1IOZAAIAAQzQmuHBnrnBgAvFreIPyAAIAAQzQnYGOoamOg");
	this.shape_7.setTransform(92.3,48.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAtH+IAAwzIOZAAIAAQzQjXDgjmAAQjmAAj2jggAvFFWIAAw0IPyAAIAAQ0QjsDGj8AAQj9AAkNjGg");
	this.shape_8.setTransform(92.3,48.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#333333").ss(7,1,1).p("AAtquIOZAAIAATRQmkJXn1pXgAvFtOIPyAAIAATRQnOISokoSg");
	this.shape_9.setTransform(92.3,73.0781);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAtIjIAAzRIOZAAIAATRQjSEsjmAAQjmAAj7ksgAvFGDIAAzRIPyAAIAATRQjnEJj8AAQj9AAkSkJg");
	this.shape_10.setTransform(92.3,73.0781);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:true},1).wait(7).to({_off:false},0).wait(18));

	// pupil
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(10,1,1).p("ACqAAQAADFgyCLQgyCLhGAAQhGAAgyiLQgxiLAAjFQAAjEAxiLQAyiLBGAAQBGAAAyCLQAyCLAADEg");
	this.shape_11.setTransform(150.6488,85.9997,0.7408,0.4778);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ah4FQQgxiLAAjFQAAjEAxiLQAziLBFAAQBHAAAxCLQAyCLAADEQAADFgyCLQgxCLhHAAQhFAAgziLg");
	this.shape_12.setTransform(150.6488,85.9997,0.7408,0.4778);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(10,1,1).p("ACqAAQAADFgyCLQgyCLhGAAQhGAAgyiLQgxiLAAjFQAAjEAxiLQAyiLBGAAQBGAAAyCLQAyCLAADEg");
	this.shape_13.setTransform(53.8698,67.7053,1.0342,0.5457,0,-0.7402,-0.678);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ah4FQQgxiLAAjFQAAjEAxiLQAziLBFAAQBHAAAxCLQAyCLAADEQAADFgyCLQgxCLhHAAQhFAAgziLg");
	this.shape_14.setTransform(53.8698,67.7053,1.0342,0.5457,0,-0.7402,-0.678);

	var maskedShapeInstanceList = [this.shape_11,this.shape_12,this.shape_13,this.shape_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(30));

	// eyes
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#333333").ss(7,1,1).p("AOJBRQAAEHhsC6QhrC6iYAAQiYAAhsi6Qhri6AAkHQAAkGBri6QBsi6CYAAQCYAABrC6QBsC6AAEGgAglhHQADEMh+DAQh7DAi0ACQizACiCi8QiAi9gDkMQgDkNB7jAQB+jACzgCQC0gCCAC8QCCC8ADEOg");
	this.shape_15.setTransform(95.4464,76.5734);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AEWISQhri6AAkHQAAkGBri6QBsi6CYAAQCYAABrC6QBsC6AAEGQAAEHhsC6QhrC6iYAAQiYAAhsi6gAsEGNQiAi9gDkMQgDkNB7jAQB+jACzgCQC0gCCAC8QCCC8ADEOQADEMh+DAQh7DAi0ACIgEAAQixAAiAi6g");
	this.shape_16.setTransform(95.4464,76.5734);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15}]}).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.5,1.5,187.9,150.2);


(lib.body = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0.45,0.5,0.3767,0.3767);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,0.5,343.1,336.8);


(lib.shminkysat = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// basic_shminky
	this.instance = new lib.eyes("synched",19);
	this.instance.setTransform(280.65,179.7,0.9674,0.9177,0,0,0,94.5,77);

	this.instance_1 = new lib.body("synched",0);
	this.instance_1.setTransform(288.3,176.3,1.0023,1.048,0,-114.8411,-118.2322,172,169);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#33FF33").ss(10,1,1).p("AA6hSIh0Cl");
	this.shape.setTransform(244.3,303.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Aw7SgQgOgHgHgTIgEgOIgFgWQgPhOg7hNIgGgIQgtg5hYhLQgkgegOgQQgagbgMgbQgOghAHgiQAHglAcgRQAXgNAkABQAnACAYARQAQALAPAVQAGAIAQAeQAfA0BFBlQA3BbAEBLQDRlNDxlFQAtg9AcgiQAqgzAngmQAagYATgFQAIgCAHABQAHAAAGACQAOAFAFAMQAMAaglAlQhkBphsCSQhCBZh5C0IhrCdQguBGgVAjQgiA8gQA0IgKAfQgHASgIALQgLAOgQAFQgIADgHAAQgIAAgIgEgAS1P6IiFj1QiKj+hJh2Qg6hfgxg/Qg/hShCg4QgsglAKgbQAFgNAPgFQAOgGAOADQAUAFAcAaQCPCECNDyQAhA5BTCYQBJCFAtBKQACg2AEg2QAEgvAEgYQAHgmAQgcQAcgyBGgpIATgKQAzgaAbARQAMAHAGAPQAGANAAAPQAAAvgxA1IgoApQgWAYgMAVQgOAagHAmQgDAXgDAuQgEBPABAoQABApgGAQQgFAPgLAJQgLALgOABIgBAAQgdAAgbgxgEApdAJYQgPgCgcgFQgmgIgUgIQgggMgQgWQgSgYgBgmQAAgZAIgsQAEgXABgMQABgUgGgOQgHgSgXgWQg5gyhugcIhegVQg3gNgkgNQhPgchCg2QhDg2gqhHQgfg0gZhIQgNglgaheQhYlBhxlOQgIgVgCgNQgDgTADgPQAFgRAPgLQARgLAPAHQASAHAKAjIDoL5QAUBFAPAjQAWA5AdAnQBGBeCFAtQA5ATB3AaQBpAcA5AtQAdAWAvA3QAvA3AcAWQAKAIAoAaQAfAVAQAQQAXAYAJAdQAJAggNAZQgJATgUAMQgTAKgWADIgTABQgLAAgNgBgEAoIAHnQAAAFACACQABACAGABIA9AMQAgAGAQgCQgIgIgOgIIgXgPIgigcQgVgRgSgEgEgqWAE8QglgOgNgSQgLgSgBggQgBgoALgYQAUgqA4gPQAVgGAcgBIAxABQAhABASACQAbAEAVAJQAYALAPATIAPgCQD8giD7g7QAxgLAcgKQAqgOAfgUQBmhAAxiyQAbhkAXivQASiIAJgxQAShnAbhNQAiheAzhIQA6hRBMguQAUgNAUgCQAXgCAKAQQAUAfg7AqQhHA0g0BVQguBLgbBhQgWBMgPBrQgIA+gPB8QgOBsgUBMQgZBjgqBLQgmBCguAoQgsAmhCAbQgvAThMATQhtAbiNAZQhNAOiwAcIgKABIgCAFQgNAcgNARQgUAYgfANQgdANgiABIgIAAQgxAAhEgZgEgp7ADNQgKAKADAKQADAIAMAEIAUAGIALAFIALAGQAIACANgBIAbgBQAjgBALgPQAEgEAGgPQAFgNAGgFQgZgIgwgBIglgBIgGAAQgjAAgOAOg");
	this.shape_1.setTransform(277.3466,298.5774);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance,p:{scaleX:0.9674,scaleY:0.9177,x:280.65,y:179.7,startPosition:19}}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance,p:{scaleX:0.9673,scaleY:0.9176,x:280.6,y:179.65,startPosition:19}}]},41).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance,p:{scaleX:0.9673,scaleY:0.9176,x:280.6,y:179.65,startPosition:19}}]},16).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance,p:{scaleX:0.9673,scaleY:0.9176,x:280.6,y:179.65,startPosition:19}}]},16).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance,p:{scaleX:0.9673,scaleY:0.9176,x:280.6,y:179.65,startPosition:19}}]},16).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance,p:{scaleX:0.9673,scaleY:0.9176,x:280.6,y:179.65,startPosition:19}}]},16).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance,p:{scaleX:0.9673,scaleY:0.9176,x:280.6,y:179.65,startPosition:27}}]},68).to({state:[]},1).wait(110));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-49.3,554.7,466.7);


// stage content:
(lib.sitINKY = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shminky_sat
	this.instance = new lib.shminkysat("synched",0);
	this.instance.setTransform(640.05,495.55,1,1,0,0,0,277.4,208.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(174));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(1002.7,597.6,-85.30000000000007,106.69999999999993);
// library properties:
lib.properties = {
	id: 'B3221B4BE0B342C99D351D19FC2C297E',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/sitINKY_atlas_1.png", id:"sitINKY_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B3221B4BE0B342C99D351D19FC2C297E'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;