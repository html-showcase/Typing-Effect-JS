

/* == [  ] == == == == == == == == == */
const 
   // getting the html element to display my messages in the list
   typeTarget = document.querySelector( "#messages" ),

   // message list
   MessageList = [
      "Typing Effect JS",
      "Seja a mudança que você quer ver no mundo.",
      "Para que o mal triunfe, basta que os bons não façam nada.",
      "Posso não concordar com o que você diz, mas defenderei até a morte o seu direito de dizê-lo.",
      "Quanto a mim, tudo que eu sei é que eu não sei nada.",
      "O pouco que aprendi até agora é quase nada, comparado ao que ignoro.",
   ];
	
const 
   Write = function( text, i, callback ) {
      let typing = 250 - Math.random() * 100;

      if( i < text.length + 1 ) {
         typeTarget.innerText = text.substring( 0, i++ );
         setTimeout( () => Write( 
            text, 
            i++, 
            callback 
         ), typing );
      } else if( i === text.length + 1 ) {
         setTimeout( () => Backspace( 
            text, 
            i, 
            callback 
         ), 1000 );
      }
   },

   Backspace = function( text, i, callback ) {
      let back = 10 + Math.random() * 100;

      if( i >= 0 ) {
         typeTarget.innerText = text.substring( 0, i-- );
         setTimeout( () => Backspace( 
            text, 
            i, 
            callback 
         ), back ); 
      } else if( typeof callback == "function" ) {
         setTimeout( callback, 1000 );
      }
   },
   
   StartWriting = function( i ) {
      typeof MessageList[i] == "undefined" ?
         setTimeout( () => StartWriting( 0 ), 1000 ) :
         i < MessageList[i].length + 1 ?
            Write( 
               MessageList[i], 
               0, 
               () => StartWriting( i + 1 ) 
            ) : console.log( "" );
   };

setTimeout( () => StartWriting( 0 ), 1000 );