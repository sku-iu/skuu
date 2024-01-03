namespace SpriteKind {
    export const outdoor1 = SpriteKind.create()
    export const outdoor2 = SpriteKind.create()
    export const outdoor3 = SpriteKind.create()
    export const outdoor4 = SpriteKind.create()
    export const paper = SpriteKind.create()
    export const door1 = SpriteKind.create()
    export const door2 = SpriteKind.create()
    export const door3 = SpriteKind.create()
    export const door4 = SpriteKind.create()
    export const 密碼箱 = SpriteKind.create()
    export const calender = SpriteKind.create()
    export const note = SpriteKind.create()
    export const book = SpriteKind.create()
    export const receipt = SpriteKind.create()
    export const recall = SpriteKind.create()
    export const cordage = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.receipt, function (sprite, otherSprite) {
    game.showLongText("購買娃娃熊*1，屬名傅明宴，購買時間03/03", DialogLayout.Bottom)
    主角.setPosition(20, 70)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.outdoor1, function (sprite, otherSprite) {
    if (game.ask("是否要返回大廳")) {
        主角.setPosition(122, 89)
        tiles.setCurrentTilemap(tilemap`224`)
        門1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            f f f . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.door1)
        門1.setPosition(42, 36)
        門2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            f f f . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.door2)
        門2.setPosition(73, 36)
        門3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            f f f . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.door3)
        門3.setPosition(105, 36)
        報紙 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            f f f . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.paper)
        報紙.setPosition(64, 69)
        往大廳的門1 = sprites.create(img`
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
            6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
            6 9 6 6 9 9 c c 6 9 9 9 6 6 9 6 
            6 6 6 9 9 9 9 c 6 6 9 9 9 6 6 6 
            6 6 9 9 9 9 9 9 6 6 9 9 9 9 6 6 
            6 9 9 9 6 6 6 6 9 6 9 9 c 9 9 6 
            6 9 c 6 6 6 9 9 9 6 9 c c c 9 6 
            6 9 c c c 9 6 9 9 9 6 6 6 c 9 6 
            6 9 9 c 9 9 6 9 6 6 6 6 9 9 9 6 
            6 6 9 9 9 9 6 6 9 9 9 9 9 9 6 6 
            6 6 6 9 9 9 6 6 c 9 9 9 9 6 6 6 
            6 9 6 6 9 9 9 6 c c 9 9 6 6 9 6 
            6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
            6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            `, SpriteKind.outdoor1)
        往大廳的門1.setPosition(153, 113)
        sprites.destroy(日曆)
        sprites.destroy(密碼箱的鎖)
        sprites.destroy(門4)
        sprites.destroy(日記)
        sprites.destroy(收據)
        sprites.destroy(book2)
        sprites.destroy(回憶錄)
    } else {
        主角.setPosition(122, 89)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.paper, function (sprite, otherSprite) {
    game.showLongText("10/01歐洲港珠澳大橋崩塌造成三人死亡，一人失意獲救", DialogLayout.Bottom)
    主角.setPosition(57, 60)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.note, function (sprite, otherSprite) {
    game.showLongText("今天是妹妹的生日，我買了一隻娃娃熊給她，她看起來很開心;我很喜歡這次買的福爾摩斯第四冊回憶記，重點是它的出版日期跟我生日一樣都是1/6;父母跟妹妹說過他們有準備驚喜給我，但前提是要解開他們的問題，問題名:時間和回憶; 10/01:今天出去玩好開心; 10/02:你們都去哪了...; 10/03:不要拋棄我...; 10/04:~~~~~~~~~~~~~~~~~~", DialogLayout.Bottom)
    主角.setPosition(55, 85)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.calender, function (sprite, otherSprite) {
    game.showLongText("8/8-爸爸的生日 3/8-媽媽的生日 3/3-妹妹的生日 ~/~-哥哥的生日", DialogLayout.Bottom)
    主角.setPosition(80, 47)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.recall, function (sprite, otherSprite) {
    game.showLongText("親愛的哥哥，這是我和爸媽打算給你的驚喜呦!記錄著我們相處的點點滴滴。 我們都支持你當偵探的夢想~ 像打擊犯罪的大英雄!明年生日那天就會看到啦~ (照片)哈哈哈，哥哥你吃蛋糕的表情好傻哦，奶油都沾到你的臉上了! 當你拿著福爾摩斯的書，那幸福的模樣，我的臉上也會不自覺浮起笑意! 希望時間能永遠定格在這個瞬間，永遠在一起!", DialogLayout.Bottom)
    tiles.placeOnTile(主角, tiles.getTileLocation(3, 6))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.book, function (sprite, otherSprite) {
    game.showLongText("夏洛克·福爾摩斯全10冊", DialogLayout.Bottom)
    tiles.placeOnTile(主角, tiles.getTileLocation(1, 4))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.door1, function (sprite, otherSprite) {
    if (game.ask("是否要進入")) {
        日曆 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            2 2 2 . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.calender)
        日曆.setPosition(85, 36)
        收據 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            9 9 9 . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.receipt)
        收據.setPosition(44, 70)
        tiles.setCurrentTilemap(tilemap`層級17`)
        主角.setPosition(80, 70)
        sprites.destroy(門1)
        sprites.destroy(門2)
        sprites.destroy(門3)
        sprites.destroy(門4)
        sprites.destroy(密碼箱的鎖)
        sprites.destroy(報紙)
        sprites.destroy(繩索)
    } else {
        tiles.setCurrentTilemap(tilemap`224`)
        主角.setPosition(43, 45)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.密碼箱, function (sprite, otherSprite) {
    if (game.askForNumber("\"請輸入密碼\"", 4) == 303) {
        game.showLongText("(發現照片)這..這個人怎麼和我長的一樣? 旁邊這個金髮女孩是誰?;還有一堆玩具..", DialogLayout.Bottom)
    } else {
        game.showLongText("密碼錯誤", DialogLayout.Bottom)
    }
    主角.setPosition(70, 95)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.door3, function (sprite, otherSprite) {
    門4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        f f f . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.door4)
    門4.setPosition(106, 66)
    密碼箱的鎖 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        f f . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.密碼箱)
    密碼箱的鎖.setPosition(70, 84)
    if (game.ask("是否要進入")) {
        tiles.setCurrentTilemap(tilemap`層級10`)
        主角.setPosition(98, 99)
        sprites.destroy(門1)
        sprites.destroy(門2)
        sprites.destroy(門3)
        sprites.destroy(報紙)
        sprites.destroy(繩索)
    } else {
        主角.setPosition(106, 45)
        tiles.setCurrentTilemap(tilemap`224`)
        sprites.destroy(門4)
        sprites.destroy(密碼箱的鎖)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.door2, function (sprite, otherSprite) {
    if (game.ask("是否要進入")) {
        if (game.askForNumber("\"請輸入密碼\"", 4) == 1304) {
            日記 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                2 2 2 . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.note)
            日記.setPosition(75, 85)
            book2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                f f . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.book)
            tiles.placeOnTile(book2, tiles.getTileLocation(1, 3))
            主角.setPosition(38, 73)
            tiles.setCurrentTilemap(tilemap`層級20`)
            sprites.destroy(門1)
            sprites.destroy(門2)
            sprites.destroy(門4)
            sprites.destroy(門3)
            sprites.destroy(報紙)
            sprites.destroy(繩索)
        } else {
            tiles.setCurrentTilemap(tilemap`224`)
            主角.setPosition(75, 45)
            game.showLongText("密碼錯誤", DialogLayout.Bottom)
        }
    } else {
        主角.setPosition(75, 45)
        tiles.setCurrentTilemap(tilemap`224`)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.door4, function (sprite, otherSprite) {
    if (game.askForNumber("\"請輸入密碼\"", 4) == 2011) {
        回憶錄 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            f f f f . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.recall)
        tiles.placeOnTile(回憶錄, tiles.getTileLocation(4, 6))
        主角.setPosition(38, 85)
        tiles.setCurrentTilemap(tilemap`層級22`)
        sprites.destroy(密碼箱的鎖)
    } else {
        game.showLongText("密碼錯誤", DialogLayout.Bottom)
        if (game.ask("是否離開洋房")) {
            tiles.setCurrentTilemap(tilemap`層級51`)
            主角.setPosition(40, 100)
            game.showLongText("遊戲結束", DialogLayout.Bottom)
        } else {
            tiles.placeOnTile(主角, tiles.getTileLocation(6, 5))
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.cordage, function (sprite, otherSprite) {
    if (game.ask("是否拿起繩索")) {
        game.showLongText("請輸入妹妹房間密碼箱的密碼", DialogLayout.Bottom)
        if (game.askForNumber("\"請輸入密碼\"", 4) == 303) {
            game.showLongText("請輸入哥哥房間的密碼", DialogLayout.Bottom)
            if (game.askForNumber("\"請輸入密碼\"", 4) == 1304) {
                game.showLongText("請輸入妹妹房間中另一個房間的密碼", DialogLayout.Bottom)
                if (game.askForNumber("\"請輸入密碼\"", 4) == 2011) {
                    tiles.placeOnTile(主角, tiles.getTileLocation(2, 6))
                    if (game.ask("是否丟棄繩索")) {
                        tiles.setCurrentTilemap(tilemap`層級41`)
                        主角.setPosition(40, 100)
                        game.showLongText("遊戲結束，恭喜您釋懷了", DialogLayout.Bottom)
                    } else {
                        game.showLongText("遊戲結束，您和家人重逢了", DialogLayout.Bottom)
                        tiles.setCurrentTilemap(tilemap`層級48`)
                        主角.setPosition(40, 100)
                    }
                } else {
                    tiles.placeOnTile(主角, tiles.getTileLocation(2, 6))
                }
            } else {
                tiles.placeOnTile(主角, tiles.getTileLocation(2, 6))
            }
        } else {
            tiles.placeOnTile(主角, tiles.getTileLocation(2, 6))
        }
    } else {
        tiles.placeOnTile(主角, tiles.getTileLocation(2, 6))
    }
})
let 回憶錄: Sprite = null
let book2: Sprite = null
let 收據: Sprite = null
let 日記: Sprite = null
let 門4: Sprite = null
let 密碼箱的鎖: Sprite = null
let 日曆: Sprite = null
let 背景圖像: Sprite = null
let 繩索: Sprite = null
let 往大廳的門1: Sprite = null
let 報紙: Sprite = null
let 門3: Sprite = null
let 門2: Sprite = null
let 門1: Sprite = null
let 主角: Sprite = null
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111199999999999999999999999999999999999999999999
    9999999999999999999999999999991199999999999999999999999999999999999999999999999999999999999999999999999999991111111119999999999999999999999999999999999999999999
    9999999999999999999999999999911111999999999999999999999999999999999999999999999999999999999999999999999999911111111111911199999999999999999999999999999999999999
    9999999999999999999999999999911111999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111999999999999999999999999999999999999
    9999999999999999999999991119911111999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111191199999999999999999999999999999999
    9999999999999999999999911119911111111199999999999999999999999999999999999999999999999999999999999999999999911111111111111111111119999999999999999999999999999999
    9999999999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111999999999999999999999999999999
    9999999999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111199999999999999999999999999999
    9999999999999999111199911111111111111119999991111999999999999999999999999999999999999999999999999999999911111111111111111111111111199999999999999999999999999999
    9999999999999911111119991111111111111119991991111199999999999999999999999999999999999999999999999999999911111111111111111111111111199999999999999999999999999999
    9999999999999111111119991111111111111199999111111199999999999999999999999999999999999999999999999999999999111111111111111111111111199999999999999999999999999999
    9999999999999111111119991111111111111199911111111199999999999999999999999999999999999999999999999999999999111111111111111111111111199999999999999999999111999999
    9999999999999111111199991111111111111111111111111199999999999999999999999999999999999999999999999999999999911111111111111111111111999999999999999999991111199999
    9991111199919111111199991111111111111111111111111199999999999999999999999999999999999999999999999999999999911111111111111111111111999911119999999999911111119999
    991111111999111111199991111111ffff1ffff1111f11f1119999f9999f99999f9999f9999999999f99999999999f9999999999999f11111f1111f11111111111991111119999999999991111111199
    9911111119911111111999111111111f1f1f11f1111ff1ffff999fff9fffff9999f9fffff9999fffffffff999f991fffff9999991fffff111f1111f11111111111111111111999999999991111111199
    991111111991111111111111111111ffff1f1f111f1f11f11199999f9f9f9f999999f9f9f999999f99999999fffff1111f999ffff1f1f1111ffffffff111111111111111119999999999991111111999
    9911111111111111111111111111111f1f1ff1111f1ff1f11f99991f9f9f99999999fffff999999f99999999f91f11111f1999f111f1f1111f1111111111111111111111199111111999911111111999
    999111111111111111111111111111ffff1f1f111fff111fff19999fffffff999fffffffff999999fffff999ffff1f111f1999f11f1f1f111ffffff111111111111111dd11d11d991111111111111199
    1911111111111111111111111111111f1f1f11f111111111111911ff1f199f9999f9f999f999999999f99f99f11f11f11f111ffff11f11111f1111f111111111111111dddddddddddddd111111111111
    1111111111111111111111111111111f1f1f11f1111fffff11111ff11ff9f99999f9fffff99999f9f9f99f99ffff11111f111ff1ffffff111f1111f111111111111111dddddddddddddd111111111111
    1111111111111111111111111111111f1f1fff1111111111111111ff1f1f999999fff199ff9999f9f9999991111111111f1111fff11f1111f11111f111111111111111dddddddddddddd111111111111
    111111111111111111111111111111f11f1f1111dfffffffff1111f1f1f1ff999f1fffffff999f999fffff911ddd111ff1111111111111111111111111111111111111d1dd1ddddddddd111111111111
    111111111111111111111111111111111111111dddddddd1111111111111199999111119999999999999991dddddd11111111111111111111111111111111111111111dddddddddddddd111111111111
    111111111111111111111111111111111111111dddddddd1111111111111199991111111999999999999911dddddd11111111111111111111111111111111111111111dddddddddddddd11111111dddd
    111111111111111111111111111111111111111dddddddd111111111111111111111111119999999999991dddddddd1111111111111111111111111111111111111111ddddddd1111ddd1111111ddddd
    111111111111111111111111111111111111111dd1ddddd111111111111111111111111119999999999991dddddddd11111111111111111dddddddd111111111111111ddddddd1111ddd1111111ddddd
    111111111111ddddddd11111111111111111111dd1ddddd11111111111111fffffffffffffffffffffffffffffdddd11111111111111111dddddddd111111111111111dddddddddddddd11dddddddddd
    11111111111ddddddd111111111111111111111dd1111dd1111111dddd11f77777777777777777777777777777fdddd1111111111111111dddddddd111111111111111dddddddddddddd11dddddddddd
    d11dddd1111ddddd11111111111111111111111dd11dddd1111ddddddd1f77ffff7fffff77fff77ffff77fffff7fddd1111111111111111dddddddd111111111111111ddd11111dddddd11ddddd1dddd
    d11dddd1111dddddddd11111111111111111111dddddddd111dddddddd1f7f7777777f777f777f7f777f777f777fdddd111111111111111dd11dddd111111111111111dddddddddddddd11ddddd1dddd
    ddddddd1111dddddddd11111111111111111111dddddddd111dddd1ddd1f7f7777777f777f777f7f777f777f777fddddd11111111111111dd11dddd111111111111111dddddddddddddd11ddddd1dddd
    ddddddd1111dddd11dd11111111111111111111dddddddd111dddddddd1f7f7777777f777f777f7f777f777f777fdddddddd11111111111dddddddd111111111111111dddddddddddddd11dddddddddd
    ddddd111111dddddddd11111111111111111111dd11dddd111ddddd1dd1f77fff7777f777fffff7ffff7777f777fddd1ddddd1111111111dddddddd111111111111111111ddddddddddd11dddddddddd
    dd11d111111dddddd1111111111111111111111ddddddddddddddddddd1f77777f777f777f777f7f777f777f777fddddddddd111111111ddddddddd11111111111111111dddddddddddd11dbbbbddd1d
    dddddd11111ddddddd111111111111111111111dddddddddddddddd1dddf77777f777f777f777f7f777f777f777fddd1ddddd111111111dddddddddddd111111111111dddddddddddddd11dbbbbd111d
    ddddddd1111dddddddd111dddd1111111111111ddddddddddddd11dddddf77777f777f777f777f7f777f777f777fddddddddd111111111dddddddddddd111111111ddddddddddddddddddddbbbbddddd
    ddd1ddd11dddddddddddddd1111111111111111ddddddddddd1111dddddf7ffff7777f777f777f7f7777777f777fddddddddd111111111ddddddddddddd111dddddddddddddddddddddddddbbbbbdddd
    ddddddddddddddddd1dddddddd111bbbbbb1111dddddddddddd11dddddddf77777777777777777777777777777fdddddddddd1111111ddddddddddddddd111dddddddddddd1ddddddddddddbbbbbdd11
    dddddddddddddddddddddddddd11bbbbbbb1111dddddddddddddddddbbbddfffffffffffffffffffffffffffffddddddddddd1111111dddddddddddddddd11dddddddddd111ddddddddddddbbbbbdddd
    ddddddddbbbbbbbbdddddddddd11bbbbbbb1111ddddddddddddddddbbbbdddd111111111111111111111ddddddddddddddddd1111111dddddddddddddddddddddddddddddddddddddddddddbbbbbdddd
    ddddddddbbbbbbbbddddddddddd1bbbbbbbddddddddbbbbddddddddbbbbdddd111111111111111111111ddd111dddddddddddddd1111dddddddddddddddddddddddddddddddddddddddddddbbbbbdddd
    ddddddddbbbbbbbbddddddddddd1bbbbbbbddddddddbbbbddddddddbbbbddddd11111111111111111111dd11ddddddddddddddddd1dddddddddddddddddddddddddddddddddddddddddddddbbbbbdddd
    ddddddddbbbbbbbbddddddddddd1bbbbbbbddddddddbbbbddddddddbbbbddddd11111111111111111ddddddddddddddddddddddddddddddddd11111ddddddddddddddddddddddddddddddddbbdbbdddd
    ddddddddbbbbbbbbddddddddddd1bbbbbbbbdddddddbbbbddddddddbbbbddddddddddd11111111111dddddddddddddddddddbbbbdddddddddddddddddddbbbbbddddddddddddddd1dddddddbbdbbdddd
    dddddddbbbbbbbbbdddbbbbdddddbbbbbbbbdddddddbbbbddddddbbbbbbdddddddddddd111111111ddddddddddddddddddddbbbbddddddddddddddddddbbbbbbbbbbbddddddd1111ddddddbbbdbbbddd
    dddddddbbbbbbdbbdddbbbbdddddbbbbbbbbdddddddbbbbddddddbbbbbbdddddddddddd111111111ddddddddddddddddddddbbbbddddddddddddddddddbbbbbbbbbbbddddddddddddddddbbbbbbbbbdd
    dddddddbbbdbbdbbdddbbbbdddddbbbbbbbbdddddddbddbddddddbbbbbbdddddffdffdd11111111bbdddddddddddddddddddbdbbbbddddddddddd11dddbbbbbbbbbbbddddddddddddddddbbbbbbbbbdd
    dddddddbbbbbbbbbdddbbbbdddddbbbbbbbbdddddddbbbbddddddbbbbbbdffdfccffcff111111bbbbbddddddddddddddddddbbbbbbddddddddddddddddbbbddddbbbbddddddddd1dddddbbbbbbdddbbd
    dddddddbbbbbbbbbdddbbbbdddddbbbbbbbbbbdddddbbbbddddddbbbbbbfccfcccccffcff1111bbbbbddddddbbddddddddddbbbdbbdddbbbbbbdddddddbbbbbbbbbbbdddddddddddddddbbbbbbbbbbbb
    ddddddbbbbbbbbbbdddbbbbdddddbbbdbbbbbbdddddbbbbdddddbbbbbbfcccfcccccccffcff1ffffffffddddbbddddddddddbbddbbbdbbbbbbbdddddddbbbbbdbbbbbddddddddddddddbbbbbbbbbbbbb
    dddbbbbbbbbbbbbbbddbdbbdddddbbbddbbbbbddbbbbbbbdddddbbbbbfcccfccccccccccffcffcccccccffddbbddddddddddbbbbbbbdbbbbbbbdddddddbbbdbbbbbbbddddddddddddddbbbbbbbbbbbbb
    dddbbbbbbddbbbbbbdbbbbbbbbddbbdddbbbbbddbbbbbbbdddddbbbbfcccfcccccccccccccffcffcccccccffbbbdddddddddbbbbbbbdbbbbdbbdddddddbbbdbbdddbbbbdddddddddddbbbbbbbbbbbbbb
    dbbbbbbbbbbbbbbbbbbbddbbbbbdbbbbbbbbbbdddbbddbbdddddbbbfccccfcccccccccccccccffcffcccccccffbdddddddddbbbbbbbdbbbdbbbdddddddbbbbbbbbbbbbbbbbdddddddbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbdbbbbbbbbbbbbdbbbbbbbbbbdddbbbbbbdddddbbfccccfccccccccccccccccccffcffcccccccffddddbbbbbbbbdbbdbbbbbbbdddddddbbbbbbbbbbbbbbbbddddddbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbdddddbbbbbbbbbbbbbbdddbbdbbbdddddbfccccfcccccccccccccccccccccffcffccccffcffddbbbbbbbbdbbbbbbbdbbdddddddbbbbbbbbbbbbbbbbddddddbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbddddbfcccccfcccccccccccccccccccccccffcffff22ffcffbbbbbbbbbbbbbbbddbbdddddddbbbbbdbbbbbbbbbbddddddbbbbbbbbbbbbbbbb
    bbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbddddfcccccfccccccccccccccccccccccccccfff22ee22fccffbbbbbbbbbbbbbbbbbdddddddbbbbbbbbbbbbdbbbddddddbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbddddffcccfcccccccccccccccccccccccccccccfff22fffccccffbbbbbbbbbbbbbbbdddbdddbbbbbbbbbbdddbbbdddddbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddbbbbbbbbbbbbbbdddddfffcfcccccccffccccccccccccccccccccfefff22fccccccffbbbbbbbbbbbbbddbbddbbbbbbbbbbbdddbbbdddddbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbddddf44fccccccffbfccccccccccccccccccccf2e2f2effcccccccffbbbbbbbbbbbddbbddbbbbbbbbbbbbbbbbbdddddbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbddf4fcccccffbbbbfcccccccccccccccccccfe2efe2fcffcccccccffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbf4fcccffbbbbbbfcccccccccccccccccccf2e2f2fcffcffcffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbffccff5fbbbbbbbfcccccccccccccccccccff2ffccfffccff44444fbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccf5ee5fbbbbbffcccccccccccccccccccccffccf444ffccff444fbbbbbbddddbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbfccf5e9efbbbff5fcccccccccccccccccccccccccf44444ffccff4fbbbbbbbbddbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccf5e89efff55fccccccccccccffcccccccccccf44443344ffccffbbbbbbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccf5e98e5f55fcccccccccccffbfccccccccccf4444444444eefccffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbb7bbbbbbbbbbfccccf5ee9e5f55fcccccccccffbbbbfcccccccccf43344444ee96effccffb77bbbbbbbbbbbbbbbbbbbb77bbbbbbbbbbbbbbbbbb7bbbb7
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77bbbbbbbbfccccccff5ee5f5fccccccccffbbbbbbfccccccccf33444444e9699e44ffcff.7bbbb7bbbbbbbbbbbbbbb77bbbbbbbb77bbbbbbb77bbbb7
    bb7bbbbbbbb77bbbbb777bbbb77bbbbbbb7bbbbb7bbbbbbbffccccccccff55ffcccccccff5fbbbbbbbfccccccf444444444e9966e4444fffff7bbb77b7bbbbbbbbbbbb77b77bbbbb77bbbbbbb777bb77
    bb77bbbbb777bbbbb777bbbbb77b77bbbb777bbb7b7bbb77.fffccccccccfffcccccccf5ee5fbbbbbffccccccf444444444e6699e444444f7777bb7777bbb7bbbbbbbb7777bbbbbb77bbbb7bbb77777.
    bb7777bbbb7777bbb777bbbbbb777bbbbb777bbb77bbbbb77f44ffccccccccccccccccf5e9efbbbff5fcccccf44ee444444e9969e444444f777777777bbbb777bbbbbbb777bbbbbb7777bb77bb7777..
    7777777777777777777777777777777777777777777777777f4444ffccccccccccccccf5e89efff55fcccccf4ee96e44444e69ee4444334f777777777777777777777777777777777777777777777777
    777777777777777777777777777777777777777777777777ff444444ffccccccccccccf5e98e5f55fccccccfe9699e444ff4ee444433444f777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777ff3f33443344ffccccccccccf5ee9e5f55fcccccf4e9966e44fccffffff444444f777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777ff333f4444443344ffcccccccccff5ee5f5fcccccf44e6699e4fcccccffccff4444f777777777777777777777777777777777777777777777777
    777777777777777777777777777777777777777777ff33333f444444444444ffcccccccccff55ffccccccf44e9969efccccccccffccff44f777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777ff3333333f43444433444444ffcccccccccfffccccccf444e69eefcccccccccccffccfff777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777ff333333333f43eee444334444e4ffcccccccccccccccf44444ee4fcccbccccccccccffccff77777777777777777777777777777777777777777777777
    777777777777777777777777777777777777ff33333333333f43e69ee44444ee2e44ffcccccccccccccf4444444fcccccbcccccccccccffccff777777777777777777777777777777777777777777777
    7777777777777777777777777777777777ff3333333333333f43e9969e444e2222e444ffccccccccccf4444334fcccccccccbccccccccccffccff7777777777777777777777777777777777777777777
    77777777777777777777777777777777ff333333333333333f43e6699e344ee222e44444ffcccccccf4443344fcccccccccccbcccccccccccffccff77777777777777777777777777777777777777777
    777777777777777777777777777777ff33333333333333333f43e9966e344e2ee22e444444ffcccccf444444fcccccccccccccccccccbcccccffffcff777777777777777777777777777777777777777
    7777777777777777777777777777ff3333333333333333333f44e9699e344e222eee44444444ffccf3344444ffcccccccccccccccccccbcccf444ffffff7777777777777777777777777777777777777
    77777777777777777777777777ff3333333333333333333337644ee96e344e22222e4433443344fff4444444f4ffccccccccccccccccccccf44444444f77777777777777777777777777777777777777
    777777777777777777777777ff33333333333333333333337776444eee344e22222e444433443344f4444444f444ffcccccccccccccccccf444444ff4f77777777777777777777777777777777777777
    77777777777777777777777777ff333333333333333333ff7777664444344e22222e444444444444f4433444f4ff44ffccccccccccccccf44444ff3f4f77777777777777777777777777777777777777
    7777777777777777777777777777ff33333333333333ff776677226664444e22222e443444443344f3344444f4f3ff44ffcccccccccccf4444ff333f4f77777777777777777777777777777777777777
    777777777777777777777777777777ff3333333333ff77766762222776644e22222e443eee444433f4444ee4f4f333ff44ffccccccccf444ff3f3b3f4f77777777777777777777777777777777777777
    77777777777777777777777777777777ff333333ff77777772222ee777764e22222e443e69ee4444f44ee96ef4f333f3ff44ffcccccf44ff333fb33f4f77777777777777777777777777777777777777
    7777777777777777777777777777777777ff33ff77777777552eeee677667e2222fe443e9969e344f4e9699ef4f333f333ff44ffccf4ff3f333f3b3f4f77777777777777777777777777777777777777
    777777777777777777777777777777777777ff777777777755eee33766777e22222e443e6699e344f4e9966ef4f3b3ee333fff44ff4f3b3f33bf333f4f77777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777745ee33766777ff22222e443e9966e344f4e6699ef4fb33e3ee3f33ff4f4fb33f3b3f333f4f77777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777433e777777f33ff222e444e9699e344f4e9969ef4f3b3e333ee333f4f4f3b3f33bf333f4f77777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777e77777fdff33ff2e7644ee96e344f4e69ee4f4f333e3333e33bf4f4f333f333f33ff4f77777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777e77777ffddff33f7776444eee344f44ee444f4f333e3333e3b3f4f4f333f333fff444f77777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777e7777ff3ffddff37777664444344f444444666ff33e3333e33bf4f4f333f33ff44444f77777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777ff33333ff7776677776664444f44444666644ffee333e333f4f4f333fff4444444f77777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777ff333333333ff66766777776664f4446666633444e3ee3e333f4f4f33ff4444444ff777777777777777777777777777777777777777
    777777777777777777777777777777777777777777777777777ff3333333333ff777667667777776f6666666333444e333ee333f4f44ff4444444ff77777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777ff333333ff7777777667667777766666633633f44e3333e333f4f444444444ff7777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777ff33ff7777777777766766777776633633777ffe3333eff3f4f4444444ff777777777777777777777777777777777777777777777
    777777777777777777777777777777777777777777777777777777777ff777777777777777667667763363337777f3ff333e44ff4f44444ff77777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777667666633777777fdff3ff3e44444f444ff7777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777776633377777777ffddff3ff47774f4ff777777777777777777777777777777777777777777777777777
    777777777777777777777777777777777777777777777777777777777777777777777777777777733777777777777ffddff777767ff77777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ff777667766777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ff7766667777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776676666777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777667667777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
if (game.ask("是否開始遊戲")) {
    tiles.setCurrentTilemap(tilemap`224`)
    主角 = sprites.create(assets.image`我的影像8`, SpriteKind.Player)
    controller.moveSprite(主角)
    主角.setStayInScreen(true)
    主角.setPosition(100, 70)
    門1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        f f f . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.door1)
    門1.setPosition(42, 36)
    門2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        f f f . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.door2)
    門2.setPosition(73, 36)
    門3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        f f f . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.door3)
    門3.setPosition(105, 36)
    報紙 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        f f f . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.paper)
    報紙.setPosition(64, 69)
    往大廳的門1 = sprites.create(img`
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
        6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
        6 9 6 6 9 9 c c 6 9 9 9 6 6 9 6 
        6 6 6 9 9 9 9 c 6 6 9 9 9 6 6 6 
        6 6 9 9 9 9 9 9 6 6 9 9 9 9 6 6 
        6 9 9 9 6 6 6 6 9 6 9 9 c 9 9 6 
        6 9 c 6 6 6 9 9 9 6 9 c c c 9 6 
        6 9 c c c 9 6 9 9 9 6 6 6 c 9 6 
        6 9 9 c 9 9 6 9 6 6 6 6 9 9 9 6 
        6 6 9 9 9 9 6 6 9 9 9 9 9 9 6 6 
        6 6 6 9 9 9 6 6 c 9 9 9 9 6 6 6 
        6 9 6 6 9 9 9 6 c c 9 9 6 6 9 6 
        6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
        6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        `, SpriteKind.outdoor1)
    往大廳的門1.setPosition(153, 113)
    繩索 = sprites.create(assets.image`我的影像4`, SpriteKind.cordage)
    tiles.placeOnTile(繩索, tiles.getTileLocation(2, 5))
} else {
    背景圖像 = sprites.create(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111199999999999999999999999999999999999999999999
        9999999999999999999999999999991199999999999999999999999999999999999999999999999999999999999999999999999999991111111119999999999999999999999999999999999999999999
        9999999999999999999999999999911111999999999999999999999999999999999999999999999999999999999999999999999999911111111111911199999999999999999999999999999999999999
        9999999999999999999999999999911111999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111999999999999999999999999999999999999
        9999999999999999999999991119911111999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111191199999999999999999999999999999999
        9999999999999999999999911119911111111199999999999999999999999999999999999999999999999999999999999999999999911111111111111111111119999999999999999999999999999999
        9999999999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111999999999999999999999999999999
        9999999999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111199999999999999999999999999999
        9999999999999999111199911111111111111119999991111999999999999999999999999999999999999999999999999999999911111111111111111111111111199999999999999999999999999999
        9999999999999911111119991111111111111119991991111199999999999999999999999999999999999999999999999999999911111111111111111111111111199999999999999999999999999999
        9999999999999111111119991111111111111199999111111199999999999999999999999999999999999999999999999999999999111111111111111111111111199999999999999999999999999999
        9999999999999111111119991111111111111199911111111199999999999999999999999999999999999999999999999999999999111111111111111111111111199999999999999999999111999999
        9999999999999111111199991111111111111111111111111199999999999999999999999999999999999999999999999999999999911111111111111111111111999999999999999999991111199999
        9991111199919111111199991111111111111111111111111199999999999999999999999999999999999999999999999999999999911111111111111111111111999911119999999999911111119999
        991111111999111111199991111111ffff1ffff1111f11f1119999f9999f99999f9999f9999999999f99999999999f9999999999999f11111f1111f11111111111991111119999999999991111111199
        9911111119911111111999111111111f1f1f11f1111ff1ffff999fff9fffff9999f9fffff9999fffffffff999f991fffff9999991fffff111f1111f11111111111111111111999999999991111111199
        991111111991111111111111111111ffff1f1f111f1f11f11199999f9f9f9f999999f9f9f999999f99999999fffff1111f999ffff1f1f1111ffffffff111111111111111119999999999991111111999
        9911111111111111111111111111111f1f1ff1111f1ff1f11f99991f9f9f99999999fffff999999f99999999f91f11111f1999f111f1f1111f1111111111111111111111199111111999911111111999
        999111111111111111111111111111ffff1f1f111fff111fff19999fffffff999fffffffff999999fffff999ffff1f111f1999f11f1f1f111ffffff111111111111111dd11d11d991111111111111199
        1911111111111111111111111111111f1f1f11f111111111111911ff1f199f9999f9f999f999999999f99f99f11f11f11f111ffff11f11111f1111f111111111111111dddddddddddddd111111111111
        1111111111111111111111111111111f1f1f11f1111fffff11111ff11ff9f99999f9fffff99999f9f9f99f99ffff11111f111ff1ffffff111f1111f111111111111111dddddddddddddd111111111111
        1111111111111111111111111111111f1f1fff1111111111111111ff1f1f999999fff199ff9999f9f9999991111111111f1111fff11f1111f11111f111111111111111dddddddddddddd111111111111
        111111111111111111111111111111f11f1f1111dfffffffff1111f1f1f1ff999f1fffffff999f999fffff911ddd111ff1111111111111111111111111111111111111d1dd1ddddddddd111111111111
        111111111111111111111111111111111111111dddddddd1111111111111199999111119999999999999991dddddd11111111111111111111111111111111111111111dddddddddddddd111111111111
        111111111111111111111111111111111111111dddddddd1111111111111199991111111999999999999911dddddd11111111111111111111111111111111111111111dddddddddddddd11111111dddd
        111111111111111111111111111111111111111dddddddd111111111111111111111111119999999999991dddddddd1111111111111111111111111111111111111111ddddddd1111ddd1111111ddddd
        111111111111111111111111111111111111111dd1ddddd111111111111111111111111119999999999991dddddddd11111111111111111dddddddd111111111111111ddddddd1111ddd1111111ddddd
        111111111111ddddddd11111111111111111111dd1ddddd11111111111111fffffffffffffffffffffffffffffdddd11111111111111111dddddddd111111111111111dddddddddddddd11dddddddddd
        11111111111ddddddd111111111111111111111dd1111dd1111111dddd11f77777777777777777777777777777fdddd1111111111111111dddddddd111111111111111dddddddddddddd11dddddddddd
        d11dddd1111ddddd11111111111111111111111dd11dddd1111ddddddd1f77ffff7fffff77fff77ffff77fffff7fddd1111111111111111dddddddd111111111111111ddd11111dddddd11ddddd1dddd
        d11dddd1111dddddddd11111111111111111111dddddddd111dddddddd1f7f7777777f777f777f7f777f777f777fdddd111111111111111dd11dddd111111111111111dddddddddddddd11ddddd1dddd
        ddddddd1111dddddddd11111111111111111111dddddddd111dddd1ddd1f7f7777777f777f777f7f777f777f777fddddd11111111111111dd11dddd111111111111111dddddddddddddd11ddddd1dddd
        ddddddd1111dddd11dd11111111111111111111dddddddd111dddddddd1f7f7777777f777f777f7f777f777f777fdddddddd11111111111dddddddd111111111111111dddddddddddddd11dddddddddd
        ddddd111111dddddddd11111111111111111111dd11dddd111ddddd1dd1f77fff7777f777fffff7ffff7777f777fddd1ddddd1111111111dddddddd111111111111111111ddddddddddd11dddddddddd
        dd11d111111dddddd1111111111111111111111ddddddddddddddddddd1f77777f777f777f777f7f777f777f777fddddddddd111111111ddddddddd11111111111111111dddddddddddd11dbbbbddd1d
        dddddd11111ddddddd111111111111111111111dddddddddddddddd1dddf77777f777f777f777f7f777f777f777fddd1ddddd111111111dddddddddddd111111111111dddddddddddddd11dbbbbd111d
        ddddddd1111dddddddd111dddd1111111111111ddddddddddddd11dddddf77777f777f777f777f7f777f777f777fddddddddd111111111dddddddddddd111111111ddddddddddddddddddddbbbbddddd
        ddd1ddd11dddddddddddddd1111111111111111ddddddddddd1111dddddf7ffff7777f777f777f7f7777777f777fddddddddd111111111ddddddddddddd111dddddddddddddddddddddddddbbbbbdddd
        ddddddddddddddddd1dddddddd111bbbbbb1111dddddddddddd11dddddddf77777777777777777777777777777fdddddddddd1111111ddddddddddddddd111dddddddddddd1ddddddddddddbbbbbdd11
        dddddddddddddddddddddddddd11bbbbbbb1111dddddddddddddddddbbbddfffffffffffffffffffffffffffffddddddddddd1111111dddddddddddddddd11dddddddddd111ddddddddddddbbbbbdddd
        ddddddddbbbbbbbbdddddddddd11bbbbbbb1111ddddddddddddddddbbbbdddd111111111111111111111ddddddddddddddddd1111111dddddddddddddddddddddddddddddddddddddddddddbbbbbdddd
        ddddddddbbbbbbbbddddddddddd1bbbbbbbddddddddbbbbddddddddbbbbdddd111111111111111111111ddd111dddddddddddddd1111dddddddddddddddddddddddddddddddddddddddddddbbbbbdddd
        ddddddddbbbbbbbbddddddddddd1bbbbbbbddddddddbbbbddddddddbbbbddddd11111111111111111111dd11ddddddddddddddddd1dddddddddddddddddddddddddddddddddddddddddddddbbbbbdddd
        ddddddddbbbbbbbbddddddddddd1bbbbbbbddddddddbbbbddddddddbbbbddddd11111111111111111ddddddddddddddddddddddddddddddddd11111ddddddddddddddddddddddddddddddddbbdbbdddd
        ddddddddbbbbbbbbddddddddddd1bbbbbbbbdddddddbbbbddddddddbbbbddddddddddd11111111111dddddddddddddddddddbbbbdddddddddddddddddddbbbbbddddddddddddddd1dddddddbbdbbdddd
        dddddddbbbbbbbbbdddbbbbdddddbbbbbbbbdddddddbbbbddddddbbbbbbdddddddddddd111111111ddddddddddddddddddddbbbbddddddddddddddddddbbbbbbbbbbbddddddd1111ddddddbbbdbbbddd
        dddddddbbbbbbdbbdddbbbbdddddbbbbbbbbdddddddbbbbddddddbbbbbbdddddddddddd111111111ddddddddddddddddddddbbbbddddddddddddddddddbbbbbbbbbbbddddddddddddddddbbbbbbbbbdd
        dddddddbbbdbbdbbdddbbbbdddddbbbbbbbbdddddddbddbddddddbbbbbbdddddffdffdd11111111bbdddddddddddddddddddbdbbbbddddddddddd11dddbbbbbbbbbbbddddddddddddddddbbbbbbbbbdd
        dddddddbbbbbbbbbdddbbbbdddddbbbbbbbbdddddddbbbbddddddbbbbbbdffdfccffcff111111bbbbbddddddddddddddddddbbbbbbddddddddddddddddbbbddddbbbbddddddddd1dddddbbbbbbdddbbd
        dddddddbbbbbbbbbdddbbbbdddddbbbbbbbbbbdddddbbbbddddddbbbbbbfccfcccccffcff1111bbbbbddddddbbddddddddddbbbdbbdddbbbbbbdddddddbbbbbbbbbbbdddddddddddddddbbbbbbbbbbbb
        ddddddbbbbbbbbbbdddbbbbdddddbbbdbbbbbbdddddbbbbdddddbbbbbbfcccfcccccccffcff1ffffffffddddbbddddddddddbbddbbbdbbbbbbbdddddddbbbbbdbbbbbddddddddddddddbbbbbbbbbbbbb
        dddbbbbbbbbbbbbbbddbdbbdddddbbbddbbbbbddbbbbbbbdddddbbbbbfcccfccccccccccffcffcccccccffddbbddddddddddbbbbbbbdbbbbbbbdddddddbbbdbbbbbbbddddddddddddddbbbbbbbbbbbbb
        dddbbbbbbddbbbbbbdbbbbbbbbddbbdddbbbbbddbbbbbbbdddddbbbbfcccfcccccccccccccffcffcccccccffbbbdddddddddbbbbbbbdbbbbdbbdddddddbbbdbbdddbbbbdddddddddddbbbbbbbbbbbbbb
        dbbbbbbbbbbbbbbbbbbbddbbbbbdbbbbbbbbbbdddbbddbbdddddbbbfccccfcccccccccccccccffcffcccccccffbdddddddddbbbbbbbdbbbdbbbdddddddbbbbbbbbbbbbbbbbdddddddbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbdbbbbbbbbbbbbdbbbbbbbbbbdddbbbbbbdddddbbfccccfccccccccccccccccccffcffcccccccffddddbbbbbbbbdbbdbbbbbbbdddddddbbbbbbbbbbbbbbbbddddddbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbdddddbbbbbbbbbbbbbbdddbbdbbbdddddbfccccfcccccccccccccccccccccffcffccccffcffddbbbbbbbbdbbbbbbbdbbdddddddbbbbbbbbbbbbbbbbddddddbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbddddbfcccccfcccccccccccccccccccccccffcffff22ffcffbbbbbbbbbbbbbbbddbbdddddddbbbbbdbbbbbbbbbbddddddbbbbbbbbbbbbbbbb
        bbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbddddfcccccfccccccccccccccccccccccccccfff22ee22fccffbbbbbbbbbbbbbbbbbdddddddbbbbbbbbbbbbdbbbddddddbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbddddffcccfcccccccccccccccccccccccccccccfff22fffccccffbbbbbbbbbbbbbbbdddbdddbbbbbbbbbbdddbbbdddddbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddbbbbbbbbbbbbbbdddddfffcfcccccccffccccccccccccccccccccfefff22fccccccffbbbbbbbbbbbbbddbbddbbbbbbbbbbbdddbbbdddddbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbddddf44fccccccffbfccccccccccccccccccccf2e2f2effcccccccffbbbbbbbbbbbddbbddbbbbbbbbbbbbbbbbbdddddbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbddf4fcccccffbbbbfcccccccccccccccccccfe2efe2fcffcccccccffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbf4fcccffbbbbbbfcccccccccccccccccccf2e2f2fcffcffcffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbffccff5fbbbbbbbfcccccccccccccccccccff2ffccfffccff44444fbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccf5ee5fbbbbbffcccccccccccccccccccccffccf444ffccff444fbbbbbbddddbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbfccf5e9efbbbff5fcccccccccccccccccccccccccf44444ffccff4fbbbbbbbbddbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccf5e89efff55fccccccccccccffcccccccccccf44443344ffccffbbbbbbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccf5e98e5f55fcccccccccccffbfccccccccccf4444444444eefccffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbb7bbbbbbbbbbfccccf5ee9e5f55fcccccccccffbbbbfcccccccccf43344444ee96effccffb77bbbbbbbbbbbbbbbbbbbb77bbbbbbbbbbbbbbbbbb7bbbb7
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77bbbbbbbbfccccccff5ee5f5fccccccccffbbbbbbfccccccccf33444444e9699e44ffcff.7bbbb7bbbbbbbbbbbbbbb77bbbbbbbb77bbbbbbb77bbbb7
        bb7bbbbbbbb77bbbbb777bbbb77bbbbbbb7bbbbb7bbbbbbbffccccccccff55ffcccccccff5fbbbbbbbfccccccf444444444e9966e4444fffff7bbb77b7bbbbbbbbbbbb77b77bbbbb77bbbbbbb777bb77
        bb77bbbbb777bbbbb777bbbbb77b77bbbb777bbb7b7bbb77.fffccccccccfffcccccccf5ee5fbbbbbffccccccf444444444e6699e444444f7777bb7777bbb7bbbbbbbb7777bbbbbb77bbbb7bbb77777.
        bb7777bbbb7777bbb777bbbbbb777bbbbb777bbb77bbbbb77f44ffccccccccccccccccf5e9efbbbff5fcccccf44ee444444e9969e444444f777777777bbbb777bbbbbbb777bbbbbb7777bb77bb7777..
        7777777777777777777777777777777777777777777777777f4444ffccccccccccccccf5e89efff55fcccccf4ee96e44444e69ee4444334f777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777ff444444ffccccccccccccf5e98e5f55fccccccfe9699e444ff4ee444433444f777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777ff3f33443344ffccccccccccf5ee9e5f55fcccccf4e9966e44fccffffff444444f777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777ff333f4444443344ffcccccccccff5ee5f5fcccccf44e6699e4fcccccffccff4444f777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777ff33333f444444444444ffcccccccccff55ffccccccf44e9969efccccccccffccff44f777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777ff3333333f43444433444444ffcccccccccfffccccccf444e69eefcccccccccccffccfff777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777ff333333333f43eee444334444e4ffcccccccccccccccf44444ee4fcccbccccccccccffccff77777777777777777777777777777777777777777777777
        777777777777777777777777777777777777ff33333333333f43e69ee44444ee2e44ffcccccccccccccf4444444fcccccbcccccccccccffccff777777777777777777777777777777777777777777777
        7777777777777777777777777777777777ff3333333333333f43e9969e444e2222e444ffccccccccccf4444334fcccccccccbccccccccccffccff7777777777777777777777777777777777777777777
        77777777777777777777777777777777ff333333333333333f43e6699e344ee222e44444ffcccccccf4443344fcccccccccccbcccccccccccffccff77777777777777777777777777777777777777777
        777777777777777777777777777777ff33333333333333333f43e9966e344e2ee22e444444ffcccccf444444fcccccccccccccccccccbcccccffffcff777777777777777777777777777777777777777
        7777777777777777777777777777ff3333333333333333333f44e9699e344e222eee44444444ffccf3344444ffcccccccccccccccccccbcccf444ffffff7777777777777777777777777777777777777
        77777777777777777777777777ff3333333333333333333337644ee96e344e22222e4433443344fff4444444f4ffccccccccccccccccccccf44444444f77777777777777777777777777777777777777
        777777777777777777777777ff33333333333333333333337776444eee344e22222e444433443344f4444444f444ffcccccccccccccccccf444444ff4f77777777777777777777777777777777777777
        77777777777777777777777777ff333333333333333333ff7777664444344e22222e444444444444f4433444f4ff44ffccccccccccccccf44444ff3f4f77777777777777777777777777777777777777
        7777777777777777777777777777ff33333333333333ff776677226664444e22222e443444443344f3344444f4f3ff44ffcccccccccccf4444ff333f4f77777777777777777777777777777777777777
        777777777777777777777777777777ff3333333333ff77766762222776644e22222e443eee444433f4444ee4f4f333ff44ffccccccccf444ff3f3b3f4f77777777777777777777777777777777777777
        77777777777777777777777777777777ff333333ff77777772222ee777764e22222e443e69ee4444f44ee96ef4f333f3ff44ffcccccf44ff333fb33f4f77777777777777777777777777777777777777
        7777777777777777777777777777777777ff33ff77777777552eeee677667e2222fe443e9969e344f4e9699ef4f333f333ff44ffccf4ff3f333f3b3f4f77777777777777777777777777777777777777
        777777777777777777777777777777777777ff777777777755eee33766777e22222e443e6699e344f4e9966ef4f3b3ee333fff44ff4f3b3f33bf333f4f77777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777745ee33766777ff22222e443e9966e344f4e6699ef4fb33e3ee3f33ff4f4fb33f3b3f333f4f77777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777433e777777f33ff222e444e9699e344f4e9969ef4f3b3e333ee333f4f4f3b3f33bf333f4f77777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777e77777fdff33ff2e7644ee96e344f4e69ee4f4f333e3333e33bf4f4f333f333f33ff4f77777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777e77777ffddff33f7776444eee344f44ee444f4f333e3333e3b3f4f4f333f333fff444f77777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777e7777ff3ffddff37777664444344f444444666ff33e3333e33bf4f4f333f33ff44444f77777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777ff33333ff7776677776664444f44444666644ffee333e333f4f4f333fff4444444f77777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777ff333333333ff66766777776664f4446666633444e3ee3e333f4f4f33ff4444444ff777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777ff3333333333ff777667667777776f6666666333444e333ee333f4f44ff4444444ff77777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777ff333333ff7777777667667777766666633633f44e3333e333f4f444444444ff7777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777ff33ff7777777777766766777776633633777ffe3333eff3f4f4444444ff777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777ff777777777777777667667763363337777f3ff333e44ff4f44444ff77777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777667666633777777fdff3ff3e44444f444ff7777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777776633377777777ffddff3ff47774f4ff777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777733777777777777ffddff777767ff77777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ff777667766777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ff7766667777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776676666777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777667667777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `, SpriteKind.Player)
}
