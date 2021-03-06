const { cleanPost, shapeForumResults } = require('./postutils');

describe('cleanPost()', () => {

    it('should remove img tags and trim whitespace', () => {
        const originalPost = {
            title: '   clean    ',
            postedBy: '<img>no images'
        };

        let cleanedPost = cleanPost(originalPost);
        expect(cleanedPost.title).to.equal('clean');
        expect(cleanedPost.postedBy).to.equal('no images');
    });
});

describe('shapeForumResults()', () => {
    it('should return a shaped object', () => {
        const posts = [{
            title: 'Test Title',
            postedBy: 'Some Guy'
        }];
        const title = 'My Forum Title';
        const result = shapeForumResults(title, posts);
        expect(result.forumTitle).to.equal(title);
        expect(result.posts).to.be.a('array');
        expect(result.posts[0].title).to.equal('Test Title');
        expect(result.posts[0].postedBy).to.equal('Some Guy');

    })
});