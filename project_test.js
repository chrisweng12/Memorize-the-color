var monsterdata = [
	{selector: ".monster1", name: "1"},
	{selector: ".monster2", name: "2"},
	{selector: ".monster3", name: "3"},
	{selector: ".monster4", name: "4"},
	{selector: ".monster5", name: "5"}
]
var setdata = [
	{name: "correct"},
	{name: "wrong"}
]
var leveldata = [
	"1345",
	"14352",
	"132451",
	"5342513",
	"231431432",
	"4325142342",
	"52435142312",
	"524132435212",
	"3251434251425",
	"42514234524134",
	"53422514222553421"
]
var Monsters = function(data,set){
	this.allOn = false
	this.monsters = data.map((d,i)=>({
		name: d.name,
		el: $(d.selector)
	}))
	this.statussets = set.map((d,i)=>({
		name: d.name
	}))
}
Monsters.prototype.lighten = function(note){
	let monster = this.monsters.find(d=>d.name==note)
	if (monster){
		monster.el.addClass("active")
		setTimeout(()=>{
			if (this.allOn==false){
				monster.el.removeClass("active")
			}	
		},100)
	}
}
Monsters.prototype.AllOn = function(){
	this.allOn = true
	this.monsters.forEach((monster)=>{
		monster.el.addClass("active")
	})
}
Monsters.prototype.AllOff = function(){
	this.allOn = false
	this.monsters.forEach((monster)=>{
		monster.el.removeClass("active")
	})
}

var gaming = function(){
	this.monsters = new Monsters(monsterdata,setdata)
	this.levels = leveldata
	this.currentLevel = 0
	this.playInterval = 400
	this.mode = "waiting"
}
gaming.prototype.levelup = function(){
	this.messageDisplay("Level: " + this.currentLevel)
	let leveluping = this.levels[this.currentLevel]
	this.startgaming(leveluping)
}
gaming.prototype.messageDisplay = function(message){
	console.log(message)
	$(".status").text(message)
}
gaming.prototype.startgaming = function(answer){
	this.mode = "playing"
	this.answer = answer
	let notes = this.answer.split("")
	this.showStatus("")
	this.timer = setInterval(()=>{
		let char = notes.shift()
		console.log(char)
		this.playSet(char)
		if (notes.length==0){
			this.started()
			clearInterval(this.timer)
		}
	},this.playInterval)
}
gaming.prototype.playSet = function(note){
	console.log(note)
	this.monsters.lighten(note)
}
gaming.prototype.started = function(){
	this.userInput = ""
	this.mode = "userInput"
}
gaming.prototype.sendInput = function(inputChar){
	if (this.mode=="userInput"){
		let tempString = this.userInput + inputChar
		this.playSet(inputChar)
		this.showStatus(tempString)
		if (this.answer.indexOf(tempString)==0){
			console.log("good job!")
			if (this.answer==tempString){
				this.messageDisplay("Correct")
				this.currentLevel = this.currentLevel + 1
				this.mode = "waiting"
				setTimeout(()=>{
					this.levelup()
				},1000)
			}
		}else{
			this.messageDisplay("Wrong")
			this.currentLevel = 0
			this.mode = "waiting"
			setTimeout(()=>{
				this.levelup()
			},1000)
		}

		console.log(tempString)
		this.userInput = this.userInput + inputChar
	}
}
gaming.prototype.showStatus = function(tempString){
	$(".inputStatus").html("")
	this.answer.split("").forEach((d,i)=>{
		var circle = $("<div class='circle'></div>")
		if(i<tempString.length){
			circle.addClass("correct")
		}
		$(".inputStatus").append(circle)
	})
	if(tempString == ""){
		this.monsters.AllOff()
	}
	if(tempString == this.answer){
		$(".inputStatus").addClass("correct")
		setTimeout(()=>{
			this.monsters.AllOn()
		},500)
	}else{
		$(".inputStatus").removeClass("correct")
	}
	if(this.answer.indexOf(tempString)!=0){
		$(".inputStatus").addClass("wrong")
		setTimeout(()=>{
			this.monsters.AllOn()
		},500)
	}else{
		$(".inputStatus").removeClass("wrong")
	}
}
var game = new gaming()
setTimeout(()=>{
	game.levelup()
},1000)
