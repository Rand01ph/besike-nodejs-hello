var greet = require("greet");
describe('greet', function(){
  it("should greet a person by name", function(){
    expect(greet("world")).to.eql("hello, world");
  });
  it("should greet a person flirtatiously if drunk", function(){
  expect(greet("world", "--drunk")).to.eql("hello world, you look sexy today");
  });
});
