const {postSchema} = require('./postschema.js');

describe('postSchema', () => {
    
    it('should select the correct title element', () => {
        expect(postSchema[0].title).to.equal('.title a@html');
    });

    it('should select the correct url element', () => {
        expect(postSchema[0].url).to.equal('.title a@href');
    });

    it('should select the correct threadId element', () => {
        expect(postSchema[0].threadId).to.equal('.setReadButton@data-id');
    });

    it('should select the correct postedBy element', () => {
        expect(postSchema[0].postedBy).to.equal('.profile-link a@html');
    });

});